<template>
  <div class="topic-add-container container">
    <div
      id="main"
      class="clearfix"
    >
      <editor-side-bar></editor-side-bar>
      <div id="content">
        <div class="header">
          <breadcrumb :breadcrumb="breadcrumb" />
        </div>
        <div class="inner">
          <div class="search-form">
            <div class="searchForm">
              <div class="search-form-item">
                <span>选择板块：</span>
                <select
                  id="tab-value"
                  v-model="searchForm.tab"
                  name="tab"
                >
                  <option
                    v-for="(item, index) in tabs"
                    :key="index"
                    :value="item.value"
                  >
                    {{ item.key }}
                  </option>
                </select>
              </div>
              <div class="search-form-item">
                <textarea
                  id="title"
                  v-model="searchForm.title"
                  autofocus
                  rows="1"
                  placeholder="标题字数 10 字以上"
                />
                </div>
            </div>
          </div>
          <mavon-editor ref="topicContent" v-model.trim="searchForm.content" :ishljs="true" :subfield="subfield" :toolbars="toolbars" />

          <el-button type="primary" size="small" class="add-btn" @click="createTopic">
            提交
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EditorSideBar from '~/components/SideBar/editor_sidebar';
import Breadcrumb from '~/components/Breadcrumb'
export default {
  components: {
    EditorSideBar,
    Breadcrumb
  },
  data () {
    return {
      searchForm: {
        tab: '',
        title: '',
        content: ''
      },
      tabs: [
        {
          key: '请选择',
          value: ''
        },
        {
          key: '分享',
          value: 'share'
        },
        {
          key: '问答',
          value: 'ask'
        },
        {
          key: '招聘',
          value: 'job'
        },
        {
          key: '客户端测试',
          value: 'dev'
        }
      ],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        fullscreen: true, // 全屏编辑
        preview: true // 预览
      },
      subfield: false,
      breadcrumb: [
        { title: '主页', active: false },
        { title: '发布话题', active: true }
      ]
    };
  },
  computed: {
    // 从 store 的 state 对象中获取 topic
    ...mapGetters({
      accesstoken: 'user/accesstoken',
      loading: 'user/loading'
    })
  },
  methods: {
    async createTopic () {
      if (!this.accesstoken) {
        this.$message({
          message: '您还没登录，请先去登录再来发表文章',
          type: 'error'
        });
        return;
      }

      if (!this.searchForm.tab) {
        this.$message({
          message: '必须选择一个版块！',
          type: 'error'
        });
        return;
      }
      if (!this.searchForm.title) {
        this.$message({
          message: '标题不能是空的。',
          type: 'error'
        });
        return;
      }
      if (
        this.searchForm.title.length < 10 ||
        this.searchForm.title.length > 100
      ) {
        this.$message({
          message: '标题字数太多或太少。',
          type: 'error'
        });

        return;
      }
      if (!this.searchForm.content) {
        this.$message({
          message: '内容不可为空。',
          type: 'error'
        });
        return;
      }
      const post_data = {
        ...this.searchForm,
        ...{ accesstoken: this.accesstoken }
      };

      try {
        const res = await this.$store.dispatch('topic/addTopic', post_data);
        if (res.success) {
          this.$message({
            message: '添加文章成功',
            type: 'success'
          });
          this.$router.push({
            name: 'topic',
            query: {
              id: res.topic_id
            }
          });
        } else {
          this.$message({
            message: '添加文章失败',
            type: 'error'
          });
        }
      } catch (error) {
        this.$message({
          message: '添加文章失败',
          type: 'error'
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
#content {
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .inner {
    background-color: #fff;
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;

    #title {
      width: 98%;
      border: none;
      resize: none;
      height: 20px;
    }
  }

  .search-form {
    .search-form-item {
      margin-bottom: 5px;

      button,
      input,
      select,
      textarea {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      button,
      input,
      label,
      select,
      textarea {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      label {
        display: block;
        margin-bottom: 5px;
      }

      input[type="text"],
      input[type="password"],
      input[type="url"],
      input[type="tel"],
      input[type="search"],
      select,
      textarea {
        display: inline-block;
        height: 20px;
        padding: 4px 6px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 20px;
        color: #555;
        vertical-align: middle;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
      input[type="text"],
      input[type="password"],
      input[type="url"],
      input[type="tel"],
      input[type="search"],
      textarea {
        background-color: #fff;
        border: 1px solid #ccc;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
        -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
        -o-transition: border linear 0.2s, box-shadow linear 0.2s;
        transition: border linear 0.2s, box-shadow linear 0.2s;
      }

      input[type="text"]:focus,
      input[type="password"]:focus,
      input[type="url"]:focus,
      input[type="tel"]:focus,
      input[type="search"]:focus,
      textarea:focus {
        border-color: rgba(82, 168, 236, 0.8);
        outline: 0;
        outline: dotted thin\9;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(82, 168, 236, 0.6);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(82, 168, 236, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(82, 168, 236, 0.6);
      }

      input[type="file"],
      select {
        height: 30px;
        line-height: 30px;
      }

      select {
        width: 220px;
        border: 1px solid #ccc;
      }

      select:focus {
        outline: #333 dotted thin;
        outline: -webkit-focus-ring-color auto 5px;
        outline-offset: -2px;
      }

      input,
      input:focus,
      textarea,
      textarea:focus {
        box-shadow: 0 0 2px rgba(60, 60, 60, 0.5);
      }
    }
  }

  /deep/ {
    .v-note-wrapper {
      min-height: 490px;
    }
  }

  .add-btn {
    margin-top: 10px;
  }
}
</style>
