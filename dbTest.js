require('dotenv').config()

const models = require('./models')

models.Player.create({
    name: 'Jayson Tatum',
    age: 18,
    team: 'celtics',
    awards: [{
        name: 'MVP',
        year: '2021'
    }]
}).then(()=>{
    console.log('added');
})

// models.Player.deleteMany().then(() => {
//   console.log('deleted');
// })