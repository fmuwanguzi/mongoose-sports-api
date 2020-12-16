const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
    name: String,
    year: Date
})

const playerSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    age: {
        type: String,
        minlength: 1,
        maxlength: 100
    },
    team: String,
    awards: [awardSchema]

})

module.exports = mongoose.model('players', playerSchema);