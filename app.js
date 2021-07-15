const express = require("express");
const bodyParser = require("body-parser");

const app = express();


var name="";
var dob="";
var gender="";
var email="";
count = 0;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  if(count === 0){
    res.render("page1");
  }else if(name=="" || dob == ""|| gender == "" || email == "" ){
    res.render("failure");
    count = 0;
  }
  else{
    res.render("success",{name: name, dob: dob, gender: gender, email: email});
    count = 0;
  }
})

app.post("/",function(req,res){
   name = req.body.name;
   dob = req.body.dob;
   gender = req.body.gender;
   email = req.body.email;
   count=1;

  res.redirect("/")

})

app.listen(3000,function(){
  console.log("The Server is running on port 3000")
});
