var express = require('express');
var router = express.Router();

// Require the controller that exports Skill CRUD functions
var skillsCtrl = require("../controllers/skills")
const app = require('../server')

// All actual paths start with "/skills"

// INDEX ROUTE
router.get("/", skillsCtrl.index);
// New Skill route
router.get("/new", skillsCtrl.new)
    // GET SKILL
router.get("/:id", skillsCtrl.show)
    // post skill route
router.post("/", skillsCtrl.create)
    // delete skill route
router.delete('/:id', skillsCtrl.delete)
    //   edit route
router.get('/:id/edit', skillsCtrl.edit)
    // updated route
router.put('/:id', skillsCtrl.update)


module.exports = router;