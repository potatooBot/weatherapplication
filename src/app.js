const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const path =require("path");
const hbs = require("hbs");




//public static path

const staticPath =path.join(__dirname,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set("views", template_path);
app.use(express.static(staticPath));
hbs.registerPartials(partials_path);


app.get("", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  // res.send("about page");
  res.render("about",{
    intro : "Welcome to my project ",
    skill :"Competetive Coder"
  })

});
app.get("/weather", (req, res) => {  
  res.render("weather",{                 
  
  });
});
app.get("*", (req, res) => {
res.render('404error',{
  errorMsg : 'Oops Page Not Found',

});
});

app.listen(port, () => {
  console.log("listening");
});
