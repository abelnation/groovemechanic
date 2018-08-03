// exports.shorthands = {
//   id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4') },
//   now_ts: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
// }
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: true});
  pgm.createTable('todos', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    description: { type: 'varchar(1024)', default: '' },
    done: { type: 'boolean', default: false, notNull: true },
    createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
  });
};
