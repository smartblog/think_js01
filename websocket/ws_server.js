const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();
const channels = ['one', 'two', 'three']

class User {
    constructor(connection, username) {
        this.username = username
        this.connection = connection;
        this._channels = new Set();
    }

    loginChannel(channelName) {
        if (channels.indexOf(channelName) !== -1) {
            this._channels.add(channelName)

            const data = {
                command: 'successLogin',
                channel: channelName,
            }
            this.connection.send(JSON.stringify(data))

            const notificationData = {
                command: 'notification',
                channel: channelName,
                message: `${this.username} is successfuly login in this channel`
            }
            sendNotification(clients, notificationData)
        }
    }

    logoutChannel(channelName) {
        this._channels.delete(channelName)

        const notificationData = {
            command: 'notification',
            channel: channelName,
            message: `${this.username} is logout from this channel`
        }
        sendNotification(clients, notificationData)
    }

    isLoggedIn(channelName) {
        return this._channels.has(channelName)
    }
}

wsConnection.on("connection", function(ws, req) {
    const username = req.url.replace('/', '')
    const user = new User(ws, username);

    clients.add(user);

    const channelsUpdate = {
        command: 'channelsUpdate',
        channels: channels
    }

    user.connection.send(JSON.stringify(channelsUpdate))

    user.connection.on("message", function(data) {
        const message = JSON.parse(data);

        switch (message.command) {
          case "login":
              user.loginChannel(message.channel)
              return;
          case "logout":
              user.logoutChannel(message.channel)
              return;
          case "sendMessage":
              clients.forEach((client) => {
                  if (client.isLoggedIn(message.channel)) {
                    client.connection.send(JSON.stringify(message));
                  }
              });
              return;
          case "exitChat":
              return;
          default:
              ws.send("Unknown command");
              return;
        }
    });

    user.connection.on("close", function() {
        clients.delete(user);
    });
});

function sendNotification(clients, data) {
    clients.forEach((client) => {
        if (client.isLoggedIn(data.channel)) {
            client.connection.send(JSON.stringify(data));
        }
    });
}
