const router = require("express").Router();


router.get('/posts', (req, res) => {
    res.json({
    posts:{
        title: "my first post",
        description:"tobol"
    }})
})

module.exports = router;