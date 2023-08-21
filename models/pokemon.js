const mongoose = require('mongoose');

const pokemonsSchema = new mongoose.Schema({

    name:  { type: String, required: true },
    img: {type: String}
    
});

const Pokemon = mongoose.model('pokemons', pokemonsSchema);

module.exports = Pokemon;