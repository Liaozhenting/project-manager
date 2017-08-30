<template>
  <div>
    <ul>
      <li v-for="item in projects" >
        <a v-bind:href='"/project/"+item.project_id'>{{item.project_name}}</a>
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
      projects: [],
    }
  },
  methods: {
    load: function() {
      this.$http.get("http://localhost:3000/projects/", {
        adminID: this.adminID
      })
        //成功的回调
        .then((response) => {
          //items变量保存起来
          if (response.data.code === 200) {
            this.projects = response.data.data;
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

</style>