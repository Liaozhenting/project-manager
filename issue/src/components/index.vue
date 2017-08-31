<template>
  <div class="banxin">
    <h1>Your Name</h1>
    <ul class="project-box">
      <li v-for="item in data_projects" class="project-item">
        <a v-bind:href="'#/projects/?'+item.project_id">{{item.project_name}}</a>
        <!-- <a v-bind:href='"/projects/"+item.project_id'>{{item.project_name}}</a> -->
      </li>
    </ul>

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