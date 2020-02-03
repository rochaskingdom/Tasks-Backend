const config = require('../knexfile.js')
const knex = require('knex')(confgi)

knex.migrate.latest([config])
module.exports = knex