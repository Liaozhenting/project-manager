var express = require('express');
var router = express.Router();

let projects = require('../controller/projects.js')
let issues = require('../controller/issues.js')

router.get('/projects', projects.listProjects);
router.post('/projects/', projects.addOneProject);
router.patch('/projects/:project_id', projects.updateOnewProject);
router.delete('/projects/:project_id', projects.deleteOneProject);

router.get('/projects/:project_id', issues.listIssues)
module.exports = router;
