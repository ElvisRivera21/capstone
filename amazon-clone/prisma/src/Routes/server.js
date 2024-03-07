import app from './routes';
import { connectToDB } from './db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

//Establishing a connection to the database
connectToDB()
  .then(() => {
        console.log('Connected to database');
    })
  .catch(error => {
        console.error('Error connecting to database:', error);
    });