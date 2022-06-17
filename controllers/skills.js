const Skill = require("../models/skill")


// controllers/skills.js

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })

}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    Skill.create(req.body)
        // redirec anytime data is changed
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    Skill.update(req.body, req.params.id)
    res.redirect('/skills')
}