var express = require('express');
var router = express.Router();

let projects = require('../controller/projects.js')
let issues = require('../controller/issues.js')

router.get('/projects', projects.listProjects);
router.post('/projects/', projects.addOneProject);
router.patch('/projects/:project_id', projects.updateOneProject);
router.delete('/projects/:project_id', projects.deleteOneProject);

router.get('/issues/:project_id', issues.listIssues)
router.post('/issues/:project_id', issues.addOneIssue);
router.patch('/issues/:issue_id', issues.updateOneIssue);
router.delete('/issues/:issue_id', issues.deleteOneIssue);
module.exports = router;
