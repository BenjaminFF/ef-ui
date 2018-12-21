<template>
  <div id="app">
    <div style="display: flex;justify-content: center">
      <ef-button icon="el-icon-plus" type="primary" @click="addClick" round style="margin-top: 2rem">添加</ef-button>
      <ef-button icon="el-icon-delete" type="primary" @click="delClick" round style="margin-top: 2rem">删除</ef-button>
    </div>
    <ef-row type="flex" class="row-bg" justify="center" :gutter="20" style="margin-top: 2rem;width: 100%">
      <ef-col :span="6">
        <div class="bg-purple-dark grid-content"></div>
      </ef-col>
      <ef-col :span="6">
        <div class="bg-purple-dark grid-content"></div>
      </ef-col>
      <ef-col :span="6">
        <div class="bg-purple-dark grid-content"></div>
      </ef-col>
    </ef-row>
    <ef-list style="margin-top: 2rem" ref="EfList" :list="list">
      <div class="el-item" v-for="(n,index) in list" :key="n">{{n}}</div>
    </ef-list>
    <div style="display: flex;justify-content: center">
      <ef-button icon="el-icon-plus" type="primary" @click="addClick" round style="margin-top: 2rem">添加</ef-button>
      <ef-button icon="el-icon-delete" type="primary" @click="delClick" round style="margin-top: 2rem">删除</ef-button>
    </div>
  </div>
</template>

<script>

import EfList from "./components/list";
export default {
  name: 'App',
  data(){
    return{
      list:[1,2,3,4,5,6,7],
      mIndex:8
    }
  },
  components: {EfList},
  methods:{
    addClick(){
      this.$refs.EfList.addItem(0,this.mIndex++);
    },
    delClick(){
      this.$refs.EfList.delItem(1);
      console.log(this.getRandomStr());
    },
    getRandomStr(){
      let timeStamp=new Date().getTime();
      return timeStamp;
    },
  }
}
</script>

<style>
  @import  '../node_modules/animate.css/animate.css';
  body,html{
    width: 100%;
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

  .el-item{
    width: 20rem;
    height: 6rem;
    background-color: #3a8ee6;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }
</style>
