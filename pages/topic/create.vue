<template>
  <div class="topic-add-container container">
    <nav-bar></nav-bar>
    <div class="clearfix" id="main">
      <editor-side-bar></editor-side-bar>
      <div id="content">
        <div class="inner">
          <div class="search-form">
            <div class="searchForm">
              <div class="search-form-item">
                <span>选择板块：</span>
                <select name="tab" id="tab-value">
                  <option v-for="(item, index) in tabs" :key="index" :value="item.value">{{item.key}}</option>
                </select>
              </div>
              <div class="search-form-item">
                <textarea autofocus rows="1" id="title" placeholder="标题字数 10 字以上" v-model="searchForm.title" />
              </div>
            </div>
          </div>
          <mavon-editor ref="topicContent" v-model="searchForm.content" :ishljs="true" :toolbars="toolbars" />

          <el-button type="primary" size="small" class="add-btn">提交</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import EditorSideBar from '~/components/SideBar/editor_sidebar';
export default {
  components: {
    NavBar,
    EditorSideBar
  },
  data() {
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
      }
    };
  },
  methods: {}
};
</script>

<style lang="postcss" scoped>
#content {
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
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

      input[type='text'],
      input[type='password'],
      input[type='url'],
      input[type='tel'],
      input[type='search'],
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
      input[type='text'],
      input[type='password'],
      input[type='url'],
      input[type='tel'],
      input[type='search'],
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

      input[type='text']:focus,
      input[type='password']:focus,
      input[type='url']:focus,
      input[type='tel']:focus,
      input[type='search']:focus,
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

      input[type='file'],
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

  .add-btn {
    margin-top: 10px;
  }
}
</style>

