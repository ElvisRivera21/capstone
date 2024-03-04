import { express } from 'express';

const app = express ();
app.use (express.json());

const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
  console.log (`Server running on port ${PORT}`);
});

app.get ("/users", (req, res) => {
    const status = {
    "Status": "Running"
};

res.send (status);

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