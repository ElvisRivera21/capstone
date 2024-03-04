import express from 'express';
import usersRouter from './Routes/users';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the users router
app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get ("/users/:id", (req, res) => {
    const status = {
    "Status": "Running"
};

res.send (status);
});

app.post ("/users", (req, res) => {
    const status = {
    "Status": "Running"
};

res.send (status);
});

app.put ("/users/:id", (req, res) => {
    const status = {
    "Status": "Running"
};

res.send (status);
});