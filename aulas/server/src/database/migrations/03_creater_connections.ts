import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_id')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .nullable();
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}