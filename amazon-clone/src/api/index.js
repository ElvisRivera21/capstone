const router = require("express").Router();

router.use("/user:id", require("./user:id"));

module.exports = router;