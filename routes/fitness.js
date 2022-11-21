const express = require('express');
const router = express.Router();
const apiData =require('../exersicedata.json')
const axios = require("axios");
const cheerio = require("cheerio");


//exersice data
router.get('/',(req,res)=>{
    res.send(apiData)

    return res.send(apiData)
})


//fitness wallpapers
var url = "https://unsplash.com/s/photos/fitness";

var art = [];
router.get("/wall", (req, res) => {
  art = [];
  axios(url)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".YVj9w", html).each(function () {
        const title = $(this).attr("src");
        //    const url = $(this).attr('href')
        art.push({
          title,
        });

        console.log(art);

      });
     return  res.send(art);
    })
    .catch((err) => console.log("err"));
 
});




module.exports = router;