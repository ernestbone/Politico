const Office = require('../models/Office')
const getAllOffices = async (req, res) =>{
    try {
        const offices = await Office.find({})
        res.status(200).json({offices})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getOffice = async (req, res) =>{
    try {
        const {id:officeID} = req.params
        const office = await Office.findOne({_id:officeID})
        res.status(200).json({office})
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}


const createOffice = async(req, res)=>{
    try {
        const office = await Office.create(req.body)
        res.status(200).json({office})
    } catch (error) {
    res.status(500).json({msg:error})    
    }
} 

const updateOffice = async (req, res) =>{
    try {
        const {id:officeID} = req.params
        const office = await Office.findOneAndUpdate({_id:officeID}, req.body, {new:true, runValidators:true})
        res.status(200).json({office})
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
   
}


module.exports = {
    getAllOffices,
    createOffice,
    getOffice,
    updateOffice
}