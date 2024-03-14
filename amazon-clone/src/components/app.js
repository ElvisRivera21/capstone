import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5432;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the users router
import usersRouter from '../config/users';
app.use("/users", usersRouter);

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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