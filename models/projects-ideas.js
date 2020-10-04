const mongoose = require('mongoose');

const projectsIdeasSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    }

},{
    timestamps: true
});

const ProjectsIdeas = mongoose.model("ProjectsIdeas", projectsIdeasSchema);
module.exports = ProjectsIdeas;