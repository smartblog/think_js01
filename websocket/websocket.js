const username = prompt("Please enter your name");
const divHello = document.getElementById('hello');
let socket = new WebSocket(`ws://localhost:8080/${username.toLowerCase()}`);

divHello.innerHTML = `<h1>Hello ${username}</h1>`

socket.onopen = event => {
    console.log("Connection established", event);
};

socket.onmessage = event => {
    data = JSON.parse(event.data)
    console.log("Message received: ", event.data);

    switch (data.command) {
        case "successLogin":
            createChannelDiv(data.channel)
            return;
        case "sendMessage":
            updateChat(data.channel, data.message, data.username)
            return;
        case "notification":
            notificateChat(data.channel, data.message)
            return;
        default:
            return;
    }
};

socket.onclose = event => {
    if (event.wasClean) {
        console.log("Closed correct", event.code);
    } else {
        console.log("Closed wrong", event.code);
    }
};

function createChannelDiv(channelName) {
    const chatsDiv = document.querySelector("#chats")

    const newChannelDiv = document.createElement("div");
    newChannelDiv.id = channelName
    newChannelDiv.style = "border: 1px solid #ccc; background: #fff; padding: 10px"
    newChannelDiv.innerHTML = `
                            <h2>${channelName}<span><button id="logout-${channelName}" onclick="logoutChannel('${channelName}')">Logout</button></span></h2>
                            <div id="messages"></div>
                            <input id="message" type="text" placeholder="message" />
                            <button id="send-to-chat-${channelName}" onclick="sendMessage('${channelName}')">Send</button>
                            `
    chatsDiv.append(newChannelDiv)
}

function sendMessage(channelName) {
    const channelDiv = document.getElementById(channelName);
    const message = channelDiv.children.message.value

    const data = {
        command: 'sendMessage',
        message: message,
        channel: channelName,
        username: username
    }

    socket.send(JSON.stringify(data));
    channelDiv.children.message.value = "";
}

function updateChat(channelName, message, username) {
    const channelDiv = document.getElementById(channelName);

    const messages = channelDiv.children.messages
    const messageHtmlString = `<p><strong>${username}</strong>: ${message}</p>`
    messages.innerHTML += messageHtmlString
}

function notificateChat(channelName, message) {
    const channelDiv = document.getElementById(channelName);

    const messages = channelDiv.children.messages
    const messageHtmlString = `<p style="color: #ccc">${message}</p>`
    messages.innerHTML += messageHtmlString
}

function loginChannel() {
    const loginInput = document.querySelector("#login-input");
    const data = {
        command: 'login',
        channel: loginInput.value,
        username: username
    }

    socket.send(JSON.stringify(data));

    loginInput.value = "";
}

function logoutChannel(channelName) {
    const data = {
        command: 'logout',
        channel: channelName,
        username: username
    }

    socket.send(JSON.stringify(data));
    const channelDiv = document.getElementById(channelName);
    channelDiv.remove()
}

function exit() {
    socket.close()
}
