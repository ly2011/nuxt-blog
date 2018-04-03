<template>
  <section class="container">
    <div>

      <header class="header">
        <span class="title" v-text="topic.title"></span>
        <div class="changes clearfix">
          <span>发布于 {{topic.create_at}}</span>
          <span>作者 {{topic.author && topic.author.loginname}}</span>
          <span>{{topic.visit_count}} 次浏览</span>
          <span>最后一次编辑是 {{topic.last_reply_at}}</span>
          <span>来自 {{topic.tabName}}</span>
          <el-button type="success" size="small" class="pull-right" @click="toCollect">收藏</el-button>
        </div>
        <div class="manage_topic" v-show="isMe">
          <i class="edit-btn el-icon-edit-outline" @click="toEdit"></i>
          <i class="del-btn el-icon-delete" @click="toDel"></i>
        </div>
      </header>

      <div class="topic">
        <div class="topic_content" v-html="topic.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async asyncData({ store, route, query }) {
    // 触发 action 后, 会返回 Promise
    const { id = '' } = query;
    const params = { id };
    await store.dispatch('topic/getTopic', params);
  },

  computed: {
    // 从 store 的 state 对象中获取 topic
    ...mapGetters({
      topic: 'topic/topic',
      loading: 'topic/loading',
      loginInfo: 'user/loginInfo'
    }),
    isMe() {
      if (this.loginInfo && this.topic.author) {
        return this.topic.author.loginname === this.loginInfo.loginname;
      }
      return false;
    }
  },
  methods: {
    toCollect() {},
    toEdit() {
      this.$router.push({
        name: 'topic-edit',
        query: {
          id: this.topic.id
        }
      });
    },
    toDel() {}
  }
};
</script>
<style lang="postcss" scoped>
.container {
  text-align: initial;
  align-items: flex-start;
  .header {
    background-color: #fff;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    .title {
      font-size: 22px;
      font-weight: 700;
      margin: 8px 0;
      display: inline-block;
      width: 75%;
      line-height: 130%;
    }

    .changes {
      font-size: 12px;
      color: #838383;
      span:before {
        content: '•';
      }
    }

    .manage_topic {
      .edit-btn,
      .del-btn {
        cursor: pointer;
        font-size: 16px;
        color: #909399;
      }

      .edit-btn {
        padding-right: 10px;
      }
    }
  }
  .topic {
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 3px 3px;
    border-top: 1px solid #e5e5e5;
    .topic-content {
      margin: 0 10px;
    }
  }
}
</style>

<style lang="postcss">
blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
}
.markdown-text p,
.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}

.markdown-text > :last-child,
.preview > :last-child,
textarea#title {
  margin-bottom: 1em;
}

.markdown-text > :first-child,
.preview > :first-child {
  margin-top: 0;
}

.markdown-text li,
.preview li {
  font-size: 14px;
  line-height: 2em;
}

.markdown-text li code,
.markdown-text p code,
.preview li code,
.preview p code {
  color: #000;
  background-color: #fcfafa;
  padding: 4px 6px;
}

.markdown-text img {
  cursor: pointer;
}

.markdown-text h1 code,
.markdown-text h2 code,
.markdown-text h3 code,
.markdown-text h4 code,
.markdown-text h5 code,
.markdown-text h6 code {
  font-size: inherit;
  color: inherit;
}

.panel .markdown-text a {
  color: #08c;
}

.preview {
  padding: 0.5em;
  font-size: 15px;
  min-height: 200px;
  word-break: break-all;
}

.preview p > img {
  display: block;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
}

.markdown_editor .markdown_in_editor,
.markdown_editor .markdown_in_preview {
  display: none;
}

.markdown_editor.in_editor .markdown_in_editor,
.markdown_editor.in_preview .markdown_in_preview {
  display: block;
}

textarea#title {
  width: 98%;
  border: none;
  resize: none;
  height: 20px;
}

.editor_buttons {
  margin-top: 10px;
}

.editor_buttons > button {
  vertical-align: baseline;
}
</style>
