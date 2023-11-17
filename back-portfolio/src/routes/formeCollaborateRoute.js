const express = require('express');
const router = express.Router();
const FormeCollaborate = require('../models/FormeCollaborate');

router.get('/', async (req , res) => {
    const Collaborat = (await FormeCollaborate.find({})).reverse();
    res.json({
        data: Collaborat,
        message:'Ok'
    })
})

router.get('/:id', async (req , res) => {
    const Collaborate = await FormeCollaborate.findById(req.params.id);
    if(!Collaborate){
        return res.status(404).json({data:null , message:'item not found'});
    }
    res.json({
        data:Collaborate,
        message:'ok'
    })
})


router.post('/' , async (req , res) => {
    let newCollaborate = new FormeCollaborate({
        name: req.body.name,
        email: req.body.email,
        yourSubject: req.body.yourSubject,
        message: req.body.message
    })

    newCollaborate = await newCollaborate.save()
    res.json({
        data:newCollaborate,
        message:'ok'
    })
})

router.put('/:id', async (req , res) => {
    try{
        const Collaborate = await FormeCollaborate.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            email: req.body.email,
            yourSubject: req.body.yourSubject,
            message: req.body.message
        },{new: true});
        if(!Collaborate) {
            return res.status(404).json({data:null, message:'item was not found'});
        }

        return res.json({data: Collaborate, message:'item was successfully updated'});

    }
    catch (error){
        console.log(error , 'Error')
        return res.status(404).json({data:null, message:'item was not found'});
    }
})

router.delete('/:id', async (req , res) => {
    const Collaborate = await FormeCollaborate.findByIdAndDelete(req.params.id)
    if(!Collaborate) {
        return res.status(404).json({data:null, message:'item was not found'});
    }
    res.json({
        data:Collaborate,
        message:'ok'
    })
})


module.exports = router ;