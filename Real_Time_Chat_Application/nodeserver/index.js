const io = require("socket.io")(3000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on("connection", socket => {
    console.log("New connection:", socket.id);

    socket.on("new-user-joined", name => {
        users[socket.id] = name;
        console.log(`User joined: ${name}`);
        socket.broadcast.emit("user-joined", name);
    });

    socket.on("send", message => {
        console.log(`Message from ${users[socket.id]}: ${message}`);
        socket.broadcast.emit("receive", { message: message, name: users[socket.id] });
    });

    socket.on("disconnect", () => {
        console.log(`User left: ${users[socket.id]}`);
        socket.broadcast.emit("left", users[socket.id]);
        delete users[socket.id];
    });
});