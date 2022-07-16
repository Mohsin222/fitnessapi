const express= require('express')
const cors= require('cors')
const port = process.env.PORT || 3000
const axios = require("axios");
const cheerio = require("cheerio");

const app= express()

app.use(cors())


const apiData =require('./data.json')

app.get('/',(req,res)=>{
    res.send('Hello live')
})

app.get('/services',(req,res)=>{
    res.send(apiData)
})


var url = "https://unsplash.com/";

const art = [];
app.get("/my", (req, res) => {
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
app.get("/my/:sel",async (req, res) => {
  mydat=[]
    const sel =req.params.sel
  axios(special+sel)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".YVj9w", html).each(function () {
        const title = $(this).attr("src");
           const url = $(this).attr('href')
        art.push({
          title,
        });
     //  art.push($(this).attr("src"))

        console.log(art);
        
      });
     res.send(art);
    })
    .catch((err) => console.log(err));


});


app.listen(port,()=>{
    console.log(`Server running at  ${port}`)
})

