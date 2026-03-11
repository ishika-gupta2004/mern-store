const express = require('express');
const router =  express.Router();

const authMiddleWare = require("../middleware/authMiddleware");

router.get("/profile",authMiddleWare,(req,resp)=>{
    resp.json({message:"Welcome User",userId: req.userId})
})

module.exports = router;