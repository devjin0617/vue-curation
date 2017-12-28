<template>
  <div id="app">
    <el-container>
      <el-header>
        Vue Curation
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
  background-color:#4ABEEB;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  min-height: 700px;
}
</style>
