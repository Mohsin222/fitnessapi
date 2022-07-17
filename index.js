const express= require('express')
const cors= require('cors')
const port = process.env.PORT || 3000
const axios = require("axios");
const cheerio = require("cheerio");
const wallpapers_routes= require('./routes/wallpapers')
const fitness_routes= require('./routes/fitness')

const app= express()

app.use(cors())

app.use('/wallpapers',wallpapers_routes);
app.use('/fitness',fitness_routes);
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



//wallpapers routes
var pixaUrl ="https://wallpapercave.com/hd-4k-desktop-wallpapers/"
var pixabyData=[]
app.get("/wallpapers", (req, res) => {
  axios(pixaUrl)
    .then((response) => {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html);

      $(".wimg", html).each(function () {
        const title = $(this).attr('src');
        //    const url = $(this).attr('href')
        pixabyData.push({
          title,
        });

        console.log(pixabyData);
      
      });

    })
    .catch((err) => console.log(err));
    res.send(pixabyData);
});


app.listen(port,()=>{
    console.log(`Server running at  ${port}`)
})

