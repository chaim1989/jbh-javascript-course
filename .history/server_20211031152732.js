const app = require("./app")
const server = require('http').createServer(app);
server.listen(3000);