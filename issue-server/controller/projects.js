const path = require('path');
const Tables = require(path.join(__dirname, '../tools/sql-orm'))
const Issues = Tables.issues
const Projects = Tables.projects

class ProjectCotroller {
  constructor() {

  }

  async listProjects(req, res, next) {
    try {
      let user_id = req.query.userID;
      let mydata = await Projects.findAll({
        attributes: ['project_id', 'project_name','project_description', 'project_issue_sum', 'project_issue_close', 'project_issue_open'],
        order: [['project_id', 'DESC']],
        // where:{
        //   user_id:user_id
        // }
      })
      res.send({ code: 200, data: mydata, msg: 'success' })
    } catch (e) {
      res.send({ code: 406, msg: e })
      console.log(e)
    }
  }

  async addOneProject(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    let data = req.body
    try {
      let mydata = await Projects.create(data)
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async updateOneProject(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const project_id = req.params.project_id;
    let data = req.body
    try {
      let mydata = await Projects.update(
        data, {
          where: {
            project_id: project_id
          }
        }
      )
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async deleteOneProject(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const project_id = req.params.project_id;
    try {
      let mydata = await Projects.destroy({
        where: {
          project_id: project_id
        }
      })
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 404, msg: e })
      console.log(e)
    }
  }

  async listOneProject(req, res, next) {
    const project_id = req.params.project_id
    try {
      let mydata = await Projects.find({
        attributes: ['project_id', 'project_name','project_description', 'project_issue_sum', 'project_issue_close', 'project_issue_open'],
        where: {
          project_id:project_id
        }
      })
      res.send({ code: 200, data: mydata, msg: 'success' })
    } catch (e) {
      res.send({ code: 406, msg: e })
      console.log(e)
    }
  }
}

module.exports = new ProjectCotroller()