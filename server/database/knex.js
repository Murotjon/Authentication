const knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "authentication"
    }
})

module.exports = knex