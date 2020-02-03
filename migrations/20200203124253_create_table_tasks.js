
exports.up = function(knex) {
  return knex.scheme.createTable('tasks', table => {
      table.increments('id').primary()
      table.string('desc').notNull()
      table.datetime('estimateAt')
      table.datetime('doneAt')
      table.integer('userId').references('id')
        .inTable('users').notNull()
  })
};

exports.down = function(knex) {
  
};
