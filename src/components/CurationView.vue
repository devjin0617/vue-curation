<template>
  <div style="max-width:1280px; margin:auto;">
    <el-row :gutter="20">
      <el-col :md="12">
        <el-card class="box-card" v-if="isLoginState">
          <div>
            <el-form ref="form" :model="form.news" label-width="100px">
              <el-form-item label="Title">
                <el-input v-model="form.news.title"></el-input>
              </el-form-item>
              <el-form-item label="Link">
                <el-input v-model="form.news.link"></el-input>
              </el-form-item>
              <el-form-item label="Description">
                <el-input v-model="form.news.description"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="bottom clearfix" style="text-align:right;">
            <el-button class="button" @click="addNews">등록</el-button>
          </div>
        </el-card>
        <el-card class="box-card" v-for="item in news" :key="item['.key']">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
            <el-button size="mini" round style="float: right;" @click="openUrl(item)">보기</el-button>
          </div>
          <div class="text item">
            {{ item.description }}
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <div>
          <el-card class="box-card">
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="Title">
                  <el-input v-model="form.posts.title"></el-input>
                </el-form-item>
                <el-form-item label="Link">
                  <el-input v-model="form.posts.link"></el-input>
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
import { mapGetters } from 'vuex'
export default {
  name: 'curation-view',
  firebase () {
    return {
      news: this.FBDB.ref('news'),
      posts: this.FBDB.ref('posts'),
      config: this.FBDB.ref('config')
    }
  },
  data () {
    return {
      dialogTableVisible: false,
      form: {
        news: {
          title: '',
          link: '',
          description: ''
        },
        posts: {
          titls: '',
          link: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters(['isLoginState'])
  },
  methods: {
    openDialog () {
      this.dialogTableVisible = true
    },
    addNews () {
      if (!this.form.news.title || !this.form.news.link || !this.form.news.description) {
        this.$notify.error({
          title: '오류',
          message: '값을 모두 입력해주세요.'
        })
        return
      }
      this.$firebaseRefs.news.push({
        title: this.form.news.title,
        link: this.form.news.link,
        description: this.form.news.description
      })
      this.form.news.title = ''
      this.form.news.link = ''
      this.form.news.description = ''
    },
    openUrl (item) {
      window.open(item.link)
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
