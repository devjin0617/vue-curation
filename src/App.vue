<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="3">Vue Curation</el-col>
          <el-col :span="18">XRP</el-col>
          <el-col :span="3">
            <el-button size="small">Login</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
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
