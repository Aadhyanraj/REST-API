const express = require("express");
const app = express();

const port = 4040;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override"); 


app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
 
app.get ("/posts", (req, res)=>{
    res.render("index.ejs" , {posts});
});

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    
    let { username, content} = req.body;
    let id = uuidv4(); 
    posts.push({ id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p)=>id === p.id);
   res.render("show.ejs", { post });
}); 

app.patch("/posts/:id", (req, res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    console.log(post);
res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs" , { post });
});

app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.send("kya hua delete hua ki nahi hua");
    

});

app.listen(port, () =>{
    console.log("listening on port : 4040");
}); 
  

let posts = [

    {
        id: uuidv4(),
        username : "Aadhyan",
        content : "This is the first post",
    },
    { id: uuidv4(),
        username : "Chandan kumar",
        content : "This is the second post",
    },
{
    id : uuidv4(),
    username : "AK",
    content : "This is moti ",
},

{
    id : uuidv4(),
    username : "Sangam",
    content : "Bhaiya",
},

];


