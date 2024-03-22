import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connectionOptions = {
    host: 'localhost',
    port: 5432,
    database: 'amazonCloneRegistrationdb',
    user: 'postgres',
    password: 'password',
};

const db = pgp(connectionOptions);

export default db;


/* export const connectToDB = async () => {
    try {
        await db.connect(connectionOptions);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}; */
