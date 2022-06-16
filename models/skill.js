const skills = [
    { id: 125223, skill: 'JavaScript', done: true },
    { id: 127904, skill: 'Python', done: false },
    { id: 139608, skill: 'Express', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,

};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // add the id
    skill.id = Date.now() % 1000000;
    // new skils wouldn't be done(complete)
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    // all properties attached to req.params are string
    id = parseInt(id)
        // find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}