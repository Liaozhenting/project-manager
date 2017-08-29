const path = require('path');
const tables = require(path.join(__dirname, '../tools/sql-orm'))
const issues = tables.issue
const projects = tables.project

class project {
  constructor() {

  }

  async getProjects(req, res, next){
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
}