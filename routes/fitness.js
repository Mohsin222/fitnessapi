const express = require('express');
const router = express.Router();
const apiData =require('../exersicedata.json')



router.get('/',(req,res)=>{
    res.send(apiData)

    return res.send(apiData)
})



module.exports = router;