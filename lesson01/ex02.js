const timestamp = 275647678;
const cluster = 58;
const kind = 3;
const user = 13977139;

a = timestamp.toString(16);
b = cluster.toString(16);
c = kind.toString(16);
d = user.toString(16);

id = a + b + c + d;
console.log(id);
