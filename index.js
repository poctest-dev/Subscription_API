const express=require("express")
const app=express();

//temporary database
var obj=[
    {
        id:"1",
        name:"Abhijit",
        subscription:["LiveSafe","Mvision_Endpoint"]
    },
    {
        id:"2",
        name:"Ankita",
        subscription:["Mvision_Cloud","Mobile_Mvision"]
    },
    {
        id:"3",
        name:"simran",
        subscription:["Total_Protection"]
    },
    {
        id:"4",
        name:"Harsh",
        subscription:["MOVE_Antivirus" , "Web_Gateway"]
    },

]
app.set("view engine","hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home")
    
})
app.post("/result",function(req,res){
    var i;
    var details;
    for( i=0;i<obj.length;i++)
    {
        if(obj[i].id==req.body.customer_id)
        {
            details = obj[i].subscription
            break;
        }
    }
    if(i==obj.length){
        details = []
    }
    res.render('result', { "details" : details})
})
app.listen(3000,function(){
    console.log("server is running")
})