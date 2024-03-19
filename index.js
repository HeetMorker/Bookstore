const express =require("express")
const app =express();
const User = require("./database");

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,res)=>{
    const users = await User.find({});
    res.render("index",{
        title:"this is homepage",
        users:users
    })
  
})

app.post("/add-books",async(req,res)=>{
    const {title,book_type,stock,val_currency,timestamp,author}=req.body;
    const newuser = new User({title,book_type,stock,val_currency,timestamp,author});
    const usersave = await newuser.save();
    res.redirect("/");
})

app.get("/add-books",(req,res)=>{
    res.render("add-books");
})

app.get("/edit/:id",async(req,res)=>{
    const {id} =req.params;
    const user = await User.findById({_id:id});
    if(user==null){
        res.redirect("/");
    }else{
        res.render("edit",{
            user:user
        })
    }
})

app.post("/update/:id",async(req,res)=>{
    const {id} =req.params;
    const {title,book_type,stock,val_currency,timestamp,author}=req.body;
    const updateuser = await User.findByIdAndUpdate({_id:id},
        {title,book_type,stock,val_currency,timestamp,author},
        {new:true})
    res.redirect("/");
})

app.get("/delete/:id",async(req,res)=>{
    const {id} =req.params;
const deleteuser =await User.findByIdAndDelete({_id:id});
res.redirect("/");
})

app.listen(5000,()=>{
    console.log("server listeninig on portno:5000");
})