
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
  	t.increments();

  	t.string('username').unique().notNullable();
  	t.string('email').unique().notNullable();
  	t.string('password').notNullable();

  	t.datetime('createdAt');
  	t.datetime('updatedAt');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('users');
};
