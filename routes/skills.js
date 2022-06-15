var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills")


// All actual paths start with "/skills"

// INDEX ROUTE
router.get("/", skillsCtrl.index);

// GET SKILL

router.get("/:id", skillsCtrl.show)


module.exports = router;