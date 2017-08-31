<template>
  <div class="banxin">
    <h1>issue title</h1>
    <p>issue 内容</p>
    <ul class="issue-box">
      <li v-for="item in data_issue" class="issue-list ">
        <span class="date">{{moment(item.issue_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
        <div class="item-content">
          {{item.issue_item_content}}
        </div>
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
      data_issue: [],
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
            this.data_issue = response.data.data;
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
