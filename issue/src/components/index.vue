<template>
  <div class="banxin">
    <h1>Your Name</h1>
    <div class="edit-bar">
      <el-button type="success" @click="isShowAddProject=true">new project</el-button>
    </div>
    <ul class="project-box">
      <li v-for="item in data_projects" class="project-item">
        <a v-bind:href="'#/projects/?'+item.project_id">
          <p>{{item.project_name}}</p>
          <!--不太想开发-->
          <!-- <div>{{item.project_description}}</div> -->
        </a>
        <!-- <a v-bind:href='"/projects/"+item.project_id'>{{item.project_name}}</a> -->
      </li>
    </ul>

    <el-dialog title="new project" v-model="isShowAddProject" size="small" :close-on-click-modal="false">
      <el-input type="textarea" :rows="3" placeholder="名字" v-model="addProjectTitle">
      </el-input>
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="addProjectContent">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowAddProject = false">取 消</el-button>
        <el-button type="primary" @click="addProject">确 定</el-button>
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
      data_projects: [],
      isShowAddProject:false,
      addProjectTitle: '',
      addProjectContent: '',
    }
  },
  methods: {
    load: function() {
      this.$http.get("http://localhost:3000/", {
      })
        //成功的回调
        .then((response) => {
          //items变量保存起来
          if (response.data.code === 200) {
            this.data_projects = response.data.data;
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
    addProject: function() {
      this.$http.post("http://localhost:3000/",{
        project_name: this.addProjectTitle,
        project_description: this.addProjectContent,
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
            this.isShowAddProject = false
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

.project-box{
  margin-top:40px;
}
.project-item{
  margin: 4%;
  width: 25%;
  height: 200px;
  float: left;
  border:1px solid #e4e4e4;
}
.project-item a{
  display: block;
  width: 100%;
  height: 100%;
}
</style>