var express = require('express');
var router = express.Router();
const ProjectsIdeas = require('../models/projects-ideas')
const auth = require("../middleware/auth");

router.get("/summary", auth, async (req, res) => {

    try{
        const allProjectsIdeas = await ProjectsIdeas.find();
        //res.send(allProjectsIdeas);
        res.render('ideasummary',{
            "ideasummary": allProjectsIdeas
        });
    } catch (e){
        console.log(e);
        res.status(500).send(e);
    }
});

router.post("/addidea", auth, async (req, res) => {
    try{
        const projectsIdeas = new ProjectsIdeas(req.body);
        await projectsIdeas.save();
        res.status(201).send(projectsIdeas);
   } catch (e){
        console.log(e);
        res.status(400).send();
   }
});
module.exports = router;