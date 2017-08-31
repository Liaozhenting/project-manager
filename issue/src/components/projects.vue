<template>
  <div class="banxin">
    <h1>project</h1>
    <span>0 close</span>
    <span>0 open</span>
    <div class="edit-bar">
      <el-button type="success" @click="isShowAddIssue=true">new issue</el-button>
    </div>

    <ul class="issue-box">
      <li v-for="item in data_project" class="issue-list ">
        <span v-if="item.statu === 0" class="el-icon-warning">
          open
        </span>
        <span v-else-if="item.statu === 1" class="el-icon-warning">
          close
        </span>
        <span class="el-icon-information" style=""></span>
        <a v-bind:href="'#/issues/?'+item.issue_id">
          <span class="issue-link" style="">
            {{item.issue_cotent}}
          </span>
        </a>
        <span class="date">{{moment(item.issue_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
      </li>
    </ul>

    <el-dialog title="new issue" v-model="isShowAddIssue" size="small" :close-on-click-modal="false">
      <el-input type="textarea" :rows="3" placeholder="标题" v-model="addIssueTitle">
      </el-input>
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="addIssueContent">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowAddIssue = false">取 消</el-button>
        <el-button type="primary" @click="addIssue">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.load()
  },
  data() {
    return {
      data_project: [],
      isShowAddIssue: false,
      addIssueTitle: '',
      addIssueContent: '',
      addIssueType: '',
      addIssueDegree: ''
    }
  },
  methods: {
    load: function() {
      this.$http.get("http://localhost:3000/" + this.matchProject(), {
      })
        //成功的回调
        .then((response) => {
          //items变量保存起来
          if (response.data.code === 200) {
            this.data_project = response.data.data;
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
    addIssue: function() {
      this.$http.post("http://localhost:3000/" + this.matchProject(), {
        issue_title: this.addIssueTitle,
        issue_cotent: this.addIssueContent,
        // issue_type:this.addIssueType,
        // issue_degree:this.addIssueDegree
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
    }
  }
}
</script>

<style scoped>
@import '../assets/css/reset.css';
@import '../assets/css/commom.css';

.edit-bar {
  margin-top: 10px;
}
.date{
  font-size:14px;
  float:right;
}
.issue-box {
  margin-top: 25px;
  border: 1px solid #e4e4e4;
}

.issue-list {
  padding: 14px;
  border: 1px solid #e4e4e4;
  overflow: hidden;
}

.issue-list span,
.issue-list div {
  line-height: 40px;
}

.issue-link {
  height: 40px;
  text-align: left;
}
</style>
