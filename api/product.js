const { Router } = require('express');
const router = Router();

router.get("/", require('./routes/homeRoutes'));
router.get("/ap/product", async(req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error")
    }
});


module.exports = router;
