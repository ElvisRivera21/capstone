const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});