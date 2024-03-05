import pgp from 'pg-promise';

const db = pgp();

const connectionOptions = {
    host: 'localhost',
    port: 5432,
    database: 'amazonCloneRegistrationdb',
    user: 'postgres',
    password: 'password',
};

export const connectToDB = async () => {
    try {
        await db.connect(connectionOptions);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

export default db;