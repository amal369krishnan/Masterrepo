const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Socket server is running');
});

module.exports = router;