const mongoose = require('mongoose')

const officeSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim: true
    },

    desc:{
        type:String
    }
})

module.exports = mongoose.model('Office', officeSchema)