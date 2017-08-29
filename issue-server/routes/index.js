var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/projects', function (req, res, next) {
  let send = async () => {
    try {
      let mydata = await myTable.jcwlproducts.find({
        attributes: ['project_id', 'project_name', 'project_issue_sum', 'project_issue_close', 'project_issue_open']
      })
      res.send({ code: 0, data: mydata })
    } catch (e) {
      res.send(e)
      console.log(e)
    }
  }
  send()
  next()
});

module.exports = router;
