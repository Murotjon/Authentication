const http = require("http")
const app = require("./app")
const port = process.env.PORT || 5001

const server = http.createServer(app)
app.set('port', port)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })