<template>
  <el-main >
    <el-row  type="flex" justify="center" v-for="item in $store.getters.getUserList" :key="item.message">
      <div class="row_item">
        <img class="avatar" v-bind:src="item.avatar_url"  alt="">
        <div class="info">        <p>{{item.login}}</p>
          <el-button @click="getUserinfo(item.login)" type="info">Info</el-button>
        </div>
      </div>

    </el-row>
  </el-main>
</template>

<script>

export default {
mounted() {
this.$store.dispatch('getUserList')
},
methods:{
  getUserinfo(login){
    this.$router.push(`/info/${login}`)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row_item{
  margin: 10px;
  background-color: #eaeaea;
  border-radius: 5px;
  padding: 5px;
  display: flex;
}

  .avatar{
    height:100px;
    width: 100px;
    border-radius: 15px;
    margin: 10px;
  }

  .info{
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100px;
  }
</style>
