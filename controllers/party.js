const Party = require('../models/Party')

const getAllParties = async (req, res) =>{
    try {
        const parties = await Party.find({})
        res.status(200).json({parties})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getParty = async(req, res)=>{
    try {
        const {id:partyID} = req.params 
        const party = await Party.findOne({_id:partyID})
        res.status(200).json({party})
    } catch (error) {
        res.status(500).json({msg:error})  
    }
}

const createParty = async(req, res)=>{
    try {
        const party = await Party.create(req.body)
        res.status(200).json({party})
    } catch (error) {
    res.status(500).json({msg:error})    
    }
} 

const updateParty = async(req, res)=>{
    try {
        const {id:partyID} = req.params
        const party = await Party.findOneAndUpdate({_id:partyID}, req.body, {new:true, runValidators:true})
        res.status(200).json({party})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllParties,
    createParty,
    getParty,
    updateParty
}