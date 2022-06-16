var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills")


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

module.exports = router;