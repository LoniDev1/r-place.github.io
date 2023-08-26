const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Neue WebSocket-Verbindung");

  socket.on("message", (message) => {
    console.log("Nachricht empfangen:", message);
    // Verarbeite die Nachricht, z. B. Pixel-Änderungen

    // Sende die Nachricht an alle verbundenen Clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
