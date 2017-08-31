<template>
  <div class="banxin">
    <h1>issue title</h1>
    <p>issue 内容</p>
    <el-button type="danger" @click="deleteThisIssue" style="float:right;">删除该Issue</el-button>
    <ul class="issue-box">
      <li v-for="item in data_issue" class="issue-list ">
        <span class="date">{{moment(item.issue_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
        <div class="item-content">
          {{item.issue_item_content}}
        </div>
      </li>
    </ul>
    <div>
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="addIssueContent">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addIssue" style="float:right;margin-top:10px;">确 定</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.load()
    this.projectId = this.$route.params.project_id
  },
  data() {
    return {
      data_issue: [],
      projectId:''
    }
  },
  methods: {
    load: function() {
      this.$http.get("http://localhost:3000/issues/" + this.matchProject(), {
      })
        //成功的回调
        .then((response) => {
          //items变量保存起来
          if (response.data.code === 200) {
            this.data_issue = response.data.data
          } else {
            this.$message({
              type: "error",
              message: response.data.code
            });
          }
        }, (err) => {
          console.log(err);
          this.$message({
            type: "error",
            message: "网络错误"
          });
        });
    },
    matchProject: function() {
      var num = /\?(\d+)/.exec(window.location.hash)[1]
      return num
    },
    deleteThisIssue:function(){
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http.delete("http://localhost:3000/project/" + this.matchProject(), {

        })
          //成功的回调
          .then((response) => {
            //items变量保存起来
            if (response.data.code === 201) {
              this.$message({
                type: "success",
                message: response.data.msg
              });
              this.isShowAddIssue = false
              this.$router.push('/projects/?'+this.projectId);

            } else {
              this.$message({
                type: "error",
                message: response.data.msg
              });
            }
          }, (err) => {
            console.log(err);
            this.$message({
              type: "error",
              message: "网络错误"
            });
          });
      })

    }
  }
}
</script>
<style scoped>
@import '../assets/css/reset.css';
@import '../assets/css/commom.css';
.issue-box {
  margin-top: 25px;
  /* border: 1px solid #e4e4e4; */
}

.issue-list {
  padding: 14px;

  overflow: hidden;
}

.item-content{
  width: 80%;
  /* margin-top:20px; */
  margin-bottom:20px;
  padding: 20px;
  border: 1px solid #e4e4e4;  
}
</style>
