const express = require('express');
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get('/',(req,res)=>{
  res.send('Hello dadadlive')
})

var url = "https://unsplash.com/"

// var art = [];
// router.get("/wall", (req, res) => {
//   art=[]
//   axios(url)
//     .then((response) => {
//       const html = response.data;
//       // console.log(html)
//       const $ = cheerio.load(html);

//       $(".YVj9w", html).each(function () {
//         const title = $(this).attr("src");
//         //    const url = $(this).attr('href')
//         art.push({
//           title,
//         });

//         console.log(art);
      
//       });
//       res.send(art);
//     })
//     .catch((err) => console.log(err));
   
// });



//by name
var special ='https://unsplash.com/s/photos/'
var mydata=[]
// a5VGX
// YVj9w
router.get("/wall/:sel",async (req, res) => {
  mydata=[]
    const sel =req.params.sel
  axios(`${special}${sel}`)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".a5VGX", html).each(function () {
        const title = $(this).attr("src");
           const url = $(this).attr('href')
           mydata.push({
          title,
        });
     //  art.push($(this).attr("src"))

    //    console.log(mydata);
        
      });
     res.send(mydata);
    })
    .catch((err) => console.log(err));


});



//by popular categories
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

        console.log(tagsData);
        
      });
     res.send(tagsData);
    })
    .catch((err) => console.log(err));


});




//test

const spec ='https://unsplash.com/'
router.get("/wall11/",async (req, res) => {
  mydata=[]
    //const sel =req.params.sel
  axios(`${spec}`)
    .then((response) => {
      const html = response.data;


      // console.log(html)
      const $ = cheerio.load(html);
   

      $(".a5VGX", html).each(function () {
        const title = $(this).attr("src");
         //  const url = $(this).attr('href')
           mydata.push({
          title,
        });
      art.push($(this).attr("src"))

       console.log(mydata);
        
      });
     res.send(mydata);
    })
    .catch((err) => console.log('err'));


});




var url = "https://unsplash.com/s/photos";

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