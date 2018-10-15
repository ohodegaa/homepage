const http = require("http");
require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5001;
const server = http.createServer(app);
console.log(port);

server.listen(port, () => console.log("API: Listening on port " + port));
