const path = require('path');
const Tables = require(path.join(__dirname, '../tools/sql-orm'))
const Issues = Tables.issues
const Projects = Tables.projects

class IssueCotroller {
  constructor() {
    
  }

  async listIssues(req, res, next) {
    try {
      let mydata = await Issues.findAll({
        attributes: ['issue_statu', 'issue_cotent', 'issue_time', 'issue_type','issue_degree'],
        where:{
          project_id:project_id
        }
      })
      res.send({ code: 200, data: mydata })
    } catch (e) {
      res.send({ code: 406, err: e })
      console.log(e)
    }
  }

  async addOneIssue(req, res, next) {
    let data = req.body
    try {
      let mydata = await Issues.create(data)
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, err: e })
      console.log(e)
    }
  }

  async updateOneIssue(req, res, next) {
    const issue_id = req.params.issue_id;
    let data = req.body
    try {
      let mydata = await Issues.update(
        data, {
          where: {
            project_id: project_id
          }
        }
      )
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, err: e })
      console.log(e)
    }
  }

  async deleteOneIssue(req, res, next) {
    try {
      let mydata = await Issues.destroy({
        where: {
          project_id: project_id
        }
      })
      res.send({ code: 201, data: mydata })
    } catch (e) {
      res.send({ code: 404, err: e })
      console.log(e)
    }
  }
}

module.exports = new IssueCotroller()