const path = require('path');
const Tables = require(path.join(__dirname, '../tools/sql-orm'))
const Issues = Tables.issues
const IssueItem = Tables.issue_items
const Projects = Tables.projects

class IssueItemCotroller {
  constructor() {

  }

  async listIssueItem(req, res, next) {
    const issue_id = req.params.issue_id;
    try {
      let mydata = await IssueItem.findAll({
        attributes: ['issue_item_id', 'issue_id', 'issue_item_content', 'issue_item_time'],
        where: {
          issue_id: issue_id
        },
        order: [['issue_id', 'DESC']]
      })
      res.send({ code: 200, data: mydata })
    } catch (e) {
      res.send({ code: 406, msg: e })
      console.log(e)
    }
  }

  async addOneIssueItem(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const issue_id = req.params.issue_id;
    let data = req.body
    data.issue_id = issue_id
    try {
      let mydata = await IssueItem.create(data)
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async updateOneIssueItem(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const issue_item_id = req.params.issue_item_id;
    let data = req.body
    try {
      let mydata = await IssueItem.update(
        data, {
          where: {
            issue_item_id: issue_item_id
          }
        }
      )
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 422, msg: e })
      console.log(e)
    }
  }

  async deleteOneIssueItem(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    const issue_item_id = req.params.issue_item_id;
    try {
      let mydata = await IssueItem.destroy({
        where: {
          issue_item_id: issue_item_id
        }
      })
      res.send({ code: 201, msg: 'success' })
    } catch (e) {
      res.send({ code: 404, msg: e })
      console.log(e)
    }
  }
}

module.exports = new IssueItemCotroller()