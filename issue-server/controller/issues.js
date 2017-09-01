const path = require('path');
const Tables = require(path.join(__dirname, '../tools/sql-orm'))
const Issues = Tables.issues
const Projects = Tables.projects

class IssueCotroller {
  constructor() {

  }

  async listIssues(req, res, next) {
    const project_id = req.params.project_id;
    try {
      let mydata = await Issues.findAll({
        attributes: ['issue_id', 'issue_title','issue_statu', 'issue_content', 'issue_time', 'issue_type', 'issue_degree'],
        where: {
          project_id: project_id
        },
        order: [['issue_id', 'DESC']]
      })
      res.send({ code: 200, data: mydata, msg: 'success' })
    } catch (e) {
      res.send({ code: 406, msg: e })
      console.log(e)
    }
  }

  async addOneIssue(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const project_id = req.params.project_id;
    let data = req.body
    data.project_id = project_id
    try {
      let mydata = await Issues.create(data)
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async updateOneIssue(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const issue_id = req.params.issue_id;
    let data = req.body
    try {
      let mydata = await Issues.update(
        data, {
          where: {
            issue_id: issue_id
          }
        }
      )
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async deleteOneIssue(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const issue_id = req.params.issue_id;
    try {
      let mydata = await Issues.destroy({
        where: {
          issue_id: issue_id
        }
      })
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 404, msg: e })
      console.log(e)
    }
  }

  async listOneIssue(req, res, next) {
    const issue_id = req.params.issue_id
    try {
      let mydata = await Issues.find({
        attributes: ['issue_id', 'issue_title','issue_statu', 'issue_content', 'issue_time', 'issue_type', 'issue_degree'],
        where: {
          issue_id:issue_id
        }
      })
      res.send({ code: 200, data: mydata, msg: 'success' })
    } catch (e) {
      res.send({ code: 406, msg: e })
      console.log(e)
    }
  }
}

module.exports = new IssueCotroller()