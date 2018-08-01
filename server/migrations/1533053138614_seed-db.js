exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("foo", {
    id: { type: "uuid", primaryKey: true, defaultValue: { toString: () => 'uuid_generate_v4()' } },
    val: { type: "smallint", notNull: true },
    createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") }
  });
  pgm.createTable("todos", {
    id: { type: "uuid", primaryKey: true, defaultValue: { toString: () => 'uuid_generate_v4()' } },
    description: { type: "varchar(1024)", default: "" },
    done: { type: "boolean", default: false, notNull: true },
    createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") }
  });
};
