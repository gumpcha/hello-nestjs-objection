import * as Knex from 'knex';

const tableName = 'review';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.integer('user_id').references('id').inTable('user');
    t.integer('book_id').references('id').inTable('book');
    t.text('comment');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
