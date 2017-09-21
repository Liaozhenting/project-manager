const path = require('path')
const Tables = require(path.join(__dirname, '../tools/sql-orm'))
const crypto = require('crypto');
let Users = Tables.users;

class UsersController {
  constructor() {

  }
  async login(req, res, next) {
    let postName = req.body.username;
    let postPass = req.body.password;
    try{
      let data = await Users.find({
        attributes:['user_pass','user_id'],
        where:{
          user_name:postName
        }
      })
      console.log(data);
      if(data){
        if(data.dataValues.user_pass === postPass){
          res.send({code:200,msg:'success',userID:data.dataValues.user_id})
        }else{
          res.send({code:401,msg:'账号或密码错误'});
        }        
      }else{
        res.send({code:401,msg:'账号或密码错误'})
      } 
    }catch(e){
      console.log(e)
      res.send({code:500,msg:e})
    }
  }

  // async sign(req, res, next) {
  //   let postName = req.body.username;
  //   let postPass = req.body.password;
  //   try{
  //     let data = await Users.find({
  //       attributes:['user_pass','user_id'],
  //       where:{
  //         user_name:postName
  //       }
  //     })
  //     console.log(data);
  //     if(data){
  //       if(data.dataValues.user_pass === postPass){
  //         res.send({code:200,msg:'success',userID:data.dataValues.user_id})
  //       }else{
  //         res.send({code:401,msg:'密码错误'});
  //       }
        
  //     }else{
  //       res.send({code:401,msg:'没有这个用户'})
  //     } 
  //   }catch(e){
  //     console.log(e)
  //     res.send({code:500,msg:e})
  //   }
  // }


}

module.exports = new UsersController();