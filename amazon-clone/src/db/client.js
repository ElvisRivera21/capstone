import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'amazon',
    user: 'lucianolawson',
    password: 'randompassword',
};

const db = pgp(dbConfig);

export default db;
