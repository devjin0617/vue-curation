<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="3">Vue Curation</el-col>
          <el-col :span="18">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
              background-color="#222222"
              text-color="#FEFEFE"
              active-text-color="#31A2D8">
              <el-menu-item index="1">Home</el-menu-item>
              <el-submenu index="2">
                <template slot="title">Collection</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
              </el-submenu>
              <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Archive</a></el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="3">
            <el-button size="small" @click="isLoginView = true">Login</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Vue Curation. <el-button type="text">https://github.com/devjin0617/vue-curation</el-button></el-footer>
    </el-container>

    <el-dialog title="Login" :visible.sync="isLoginView" width="30%">
      <div>
        <el-form ref="form" :model="loginForm" label-width="120px">
          <el-form-item label="Email">
            <el-input type="email" v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Login</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLoginView: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
body {
  margin:0;
}
.el-header, .el-footer {
  background-color:#222222;
  color: #FEFEFE;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color:#2D2D2D;
}
.el-main {
  min-height: 700px;
}
</style>
