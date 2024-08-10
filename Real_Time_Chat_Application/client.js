document.addEventListener('DOMContentLoaded', () => {
    const socket = io('http://localhost:3000');

    const form = document.getElementById('send-mainconent');
    const messageinp = document.getElementById('messageinp');
    const messagecontainer = document.getElementById("maincontent");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = messageinp.value;
        append(`You: ${message}`, "right");
        socket.emit("send", message);
        messageinp.value = "";
    });

    const append = (message, position) => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.classList.add('message');
        messageElement.classList.add(position);
        messagecontainer.append(messageElement);
        messagecontainer.scrollTop = messagecontainer.scrollHeight;  // Scroll to the bottom
    }

    const name = prompt('Enter your name to join');
    socket.emit('new-user-joined', name);

    socket.on("user-joined", name => {
        append(`${name} joined the chat`, 'mid');
    });

    socket.on('receive', data => {
        append(`${data.name}: ${data.message}`, 'left');
    });

    socket.on('left', name => {
        append(`${name} left the chat`, 'mid');
    });
});