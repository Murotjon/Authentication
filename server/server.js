const http = require("http");
const port = 5000;
const app = require("./app")

const server = http.createServer(app)
app.set("port", port)

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})