const skills = [
    { id: 125223, skill: 'JavaScript', done: true },
    { id: 127904, skill: 'Python', done: false },
    { id: 139608, skill: 'Express', done: false }
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}