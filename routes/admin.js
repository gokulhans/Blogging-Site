const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    let data = [' halo',' halo',' halo',' halo',' halo',' halo',' halo',]
    res.render('pages/admin',{data})
});

module.exports = router;