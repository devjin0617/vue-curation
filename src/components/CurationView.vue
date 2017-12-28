<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="12">
        <el-card class="box-card" v-for="o in 10" :key="o">
          <div slot="header" class="clearfix">
            <span>News Title {{ o }}</span>
          </div>
          <div class="text item">
            {{'List item ' + o }}<br>
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <div>
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div  class="text item">
              {{'Community ' + o }}<br>
            </div>
          </el-card>
        </div>
        <div style="margin-top:20px;">
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div  class="text item">
              {{'Twitter ' + o }}<br>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card" v-for="o in 10" :key="o">
          <div  class="text item">
            <h2>XRP Tutorial {{ o }}</h2>
            {{'List item ' + o }}<br>
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'curation-view'
}
</script>

<style scoped>
.el-card {
  margin-bottom:15px;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
