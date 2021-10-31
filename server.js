const app = require("./app/app.js");
const server = require('http').createServer(app);
server.listen(3000);