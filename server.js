// load express 
const express = require('express'); 
const app = express(); 
const PORT = 3001; 

require("dotenv").config(); 
const mongoose = require('mongoose'); 
const methodOverride = require('method-override'); 

// get objects with data from models folder 
const pokemons = require("./models/pokemons"); 


// calling the schema
const Pokemon = require("./models/pokemon"); 

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

////////////////////////////// MIDDLEWARE

// .env file connect 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});



app.get('/pokemons/seed', async (req,res)=>{
    await Pokemon.create(pokemons); 
    res.redirect("/pokemons")
})


////////////////////////// Define any ROUTES on our app 

app.get('/pokemon', async (req,res)=>{

  const allPokemon = await Pokemon.find({})
  res.render("Index",{vermin:allPokemon}); 
})

app.get("/pokemon/:id", async (req, res) => {
  // const eachPokemon = await Pokemon.findById(req.params.id)
  const eachPokemon = await Pokemon.findById(req.params.id)
    res.render("Show",{
    pokemon: eachPokemon
  })
});





// -------------{ Show => Each Pokemon }






// create route 
app.post('/newsubmit', async (req,res)=>{

  //create a new req.body (entry in database)
  await Pokemon.create(req.body)
  res.redirect("/pokemon"); 
})


app.get('/new', (req,res)=>{
  res.render("PokeNew"); 
})



// if it has a : it refers to params that comming from the URL 
app.get('/update/:id', async (req,res)=>{
  // acat var is going to props 
  // id refers to a specific object 
  const poke = await Pokemon.findById(req.params.id)
  res.render("PokeEdit",{poke:poke}); 
})



app.put('/updatesubmit/:id', async (req,res)=>{
  // finds correct object by id and puts req.body 
  await Pokemon.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/pokemon"); 
})

app.delete('/delete/:id', async (req,res)=>{
  // finds correct object by id and puts req.body 
  await Pokemon.findByIdAndDelete(req.params.id)
  res.redirect("/pokemon"); 
})




//////////////////////////



app.post('/addlist', async (req,res)=>{
  await Pokemon.deleteMany({})
  pokemons.map(async(current)=>{
    
    await Pokemon.create(current)
  })
  res.redirect("/pokemon")
})




app.listen(PORT, (req, res) => {
    console.log(`Listening on`, PORT);
  });