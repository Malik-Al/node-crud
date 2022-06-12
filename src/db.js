const { Pool } = require('pg');

exports.client = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'testdb',
    password: '0159',
    port: 5432,
})