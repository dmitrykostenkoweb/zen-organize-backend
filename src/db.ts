import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'baza',
    password: 'password',
    port: 5432,
});

export default pool