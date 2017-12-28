<template>
  <div style="max-width:1280px; margin:auto;">
    <el-row :gutter="20">
      <el-col :md="12">
        <el-card class="box-card">
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="Title">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="Link">
                <el-input v-model="form.link"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="bottom clearfix" style="text-align:right;">
            <el-button class="button">등록</el-button>
          </div>
        </el-card>
        <el-card class="box-card" v-for="o in 10" :key="o">
          <div slot="header" class="clearfix">
            <span>News Title {{ o }}</span>
            <el-button size="mini" round style="float: right;">보기</el-button>
          </div>
          <div class="text item">
            {{'List item ' + o }}<br>
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <div>
          <el-card class="box-card">
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="Title">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Link">
                  <el-input v-model="form.link"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="bottom clearfix" style="text-align:right;">
              <el-button class="button">등록</el-button>
            </div>
          </el-card>
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div  class="text item">
              <el-button type="text">{{'Community ' + o }}</el-button>
            </div>
          </el-card>
        </div>
        <div style="margin-top:20px;">
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div  class="text item">
              <el-button type="text">{{'Twitter ' + o }}</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card" v-for="o in 10" :key="o">
          <div slot="header" class="clearfix">
            <span>XRP Tutorial {{ o }}</span>
            <el-button size="mini" round style="float: right;" @click="openDialog">읽기</el-button>
          </div>
          <div  class="text item">
            {{'List item ' + o }}<br>
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="XRP Tutorial" :visible.sync="dialogTableVisible">
      <div style="min-height:768px;">
        Hello World
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'curation-view',
  data () {
    return {
      dialogTableVisible: false,
      form: {
        title: '',
        link: ''
      }
    }
  },
  methods: {
    openDialog () {
      this.dialogTableVisible = true
    }
  }
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
