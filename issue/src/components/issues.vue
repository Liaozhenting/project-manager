<template>
  <div class="banxin">
    <h1>issue title</h1>
    <p>issue 内容</p>
    <el-button type="danger" @click="deleteThisIssue" style="float:right;">删除该Issue</el-button>
    <ul class="issue-box">
      <li v-for="(item,index) in data_issue" class="issue-list ">
        <span class="date">{{moment(item.issue_item_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
        <div v-if="index!==editNum">
          <div class="item-content">{{item.issue_item_content}}</div>
          <i class="el-icon-edit edit-item-button" @click="showUpdateItem(item.issue_item_content,index)"></i>&nbsp;<i class="el-icon-delete" @click="deleteIssueItem(item.issue_item_id)"></i>
        </div>
        <div v-else>
          <el-input class="textarea" type="textarea" v-model="updateIssueItemContent">
          </el-input>
          <el-button type="danger" @click="editNum=-1">取消</el-button>
          <el-button type="success" @click="updateIssueItem(item.issue_item_id)">提交</el-button>
        </div>

      </li>
    </ul>
    <div>
      <el-input class="textarea" type="textarea" :rows="10" placeholder="请输入内容" v-model="addIssueItemContent">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addIssueItem" style="float:right;margin-top:10px;">确 定</el-button>
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
      projectId: '',
      editNum: -1,
      updateIssueItemContent: '',
      addIssueItemContent: '',
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
            var that = this
            this.data_issue = response.data.data
            // this.data_issue.forEach(function(ele,index){
            //   ele.issue_item_time = that.moment(ele.issue_item_time).format('YYYY-MM-DD HH:mm:ss')
            // })
            console.log(this.data_issue)
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
    deleteThisIssue: function() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http.delete("http://localhost:3000/project/" + this.matchProject(), {

        }).then((response) => {
          if (response.data.code === 201) {
            this.$message({
              type: "success",
              message: response.data.msg
            });
            this.isShowAddIssue = false
            this.$router.push('/projects/?' + this.projectId);

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

    },
    addIssueItem: function() {
      this.$http.post("http://localhost:3000/issues/" + this.matchProject(), {
        issue_item_content: this.addIssueItemContent,
      }).then((response) => {
        if (response.data.code === 201) {
          this.isShowAddIssue = false
          this.addIssueItemContent = ''
          this.load()
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
    },
    showUpdateItem: function(content, index) {
      // this.notShowEditIssue=false;
      this.editNum = index
      this.updateIssueItemContent = content;
    },
    updateIssueItem: function(issue_item_id) {
      this.$http.patch("http://localhost:3000/issues/" + this.matchProject() + "/" + issue_item_id, {
        issue_item_content: this.updateIssueItemContent,
      }).then((response) => {
        if (response.data.code === 201) {
          this.editNum = -1
          this.load()
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
    },
    deleteIssueItem: function(issue_item_id) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http.delete("http://localhost:3000/issues/" + this.matchProject() + "/" + issue_item_id, {
        }).then((response) => {
          if (response.data.code === 201) {
            this.isShowAddIssue = false
            this.load()
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

    },
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
i:hover{
  color:#20a0ff;
}
.issue-list {
  padding: 14px;

  overflow: hidden;
}

.item-content {
  width: 80%;
  /* margin-top:20px; */
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e4e4e4;
}

.textarea {
  margin-top: 20px;
}
</style>
