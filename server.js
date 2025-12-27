const http = require("http");
const app = require("./app");

const port = process.env.port || 7800;

const server = http.createServer(app);

module.exports = server;

app.listen(port);