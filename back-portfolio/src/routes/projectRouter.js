const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/' , async (req , res) => {
    const project = (await Project.find({})).reverse()
    res.json({
        data:project,
        message:'Ok'
    })
})

router.get('/:id' , async (req , res) => {
    const project = await Project.findById(req.params.id);
    if(!project) {
        return res.status(404).json({data:null,message:'project was not found'})
    }
    res.json({
        data:project,
        message:'Ok'
    })
})

router.post('/' , async (req , res) => {
    let newProject = new Project({
        title:req.body.title,
        description:req.body.description,
        UrlImage:req.body.description,
        directLink:req.body.directLink,
        details:req.body.details,
        UrlVideo:req.body.UrlVideo
    })
    newProject = await newProject.save()
    res.json({
        data:newProject,
        message:'Ok'
    })
})

router.put('/:id' , async (req , res) =>{
    try {
        const project = await Project.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            description:req.body.description,
            UrlImage:req.body.UrlImage,
            directLink:req.body.directLink,
            details:req.body.details,
            UrlVideo:req.body.UrlVideo
        }, {new:true})

        if (!project) {
            return res.status(404).json({ data: null, message: 'project was not found' });
        }

        return res.json({ data: project, message: 'project updated successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
})



router.delete('/:id' , async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id)
    if(!project) {
        res.status(400).json({data:null, message:'project was not found'})
    }
    res.json({
        data:project,
        message:'Ok'
    })
})


module.exports = router;