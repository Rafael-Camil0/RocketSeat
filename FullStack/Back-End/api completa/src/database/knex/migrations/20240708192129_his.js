
exports.up = knex => knex.schema.createTable("notes2",table => {

    table.increments("id");
    table.text("title")
    table.text("description");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("create_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
}
)

exports.down = knex => knex.schema.dropTable("notes")
