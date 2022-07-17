const express = require('express');
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");



var url = "https://unsplash.com/";

const art = [];
router.get("/wall", (req, res) => {
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

    })
    .catch((err) => console.log("err"));
    res.send(art);
});



//by name
var special ='https://unsplash.com/s/photos/'
var mydata=[]
router.get("/wal/:sel",async (req, res) => {
  mydata=[]
    const sel =req.params.sel
  axios(special+sel)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".YVj9w", html).each(function () {
        const title = $(this).attr("src");
           const url = $(this).attr('href')
           mydata.push({
          title,
        });
     //  art.push($(this).attr("src"))

        console.log(mydata);
        
      });
     res.send(art);
    })
    .catch((err) => console.log(err));


});



//by name
var tagsUrl ='https://unsplash.com/'
var tagsData=[]
router.get("/tags",async (req, res) => {
    tagsData=[]
    const sel =req.params.sel
  axios(tagsUrl)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".p7ajO", html).each(function () {
        const title = $(this).attr("href");
        //   const url = $(this).attr('href')

        $('.S48vf',html).each(function(){

            const text =$(this).text()
            tagsData.push({
                title,
                text
              });
        })
   
     //  art.push($(this).attr("src"))

        console.log(art);
        
      });
     res.send(art);
    })
    .catch((err) => console.log(err));


});


module.exports = router;