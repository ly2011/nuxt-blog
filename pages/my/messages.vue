<template>
  <div class="msg-container">
    <nav-bar></nav-bar>
    <div class="hasnot_read_messages">
      <el-card class="box-card">
        <div slot="header" class="box-card-header">
          <span>新消息</span>
        </div>
        <div class="box-card-content">
          <template v-if="messages.hasnot_read_messages.length > 0">
            <div v-for="msg in messages.has_read_messages" :key="msg.id" class="box-card-item">
              <span>
                <router-link :to="{}">
                  {{ msg.author.loginname }}
                </router-link>
                回复了你的话题
                <router-link :to="{name: 'topic', query: {id: msg.id}}">
                  {{ msg.topic.title }}
                </router-link>
              </span>
            </div>
          </template>
          <template v-else>
            <p>无消息</p>
          </template>
        </div>
      </el-card>
    </div>
    <div class="has_read_messages">
      <el-card class="box-card">
        <div slot="header" class="box-card-header">
          <span>过往信息</span>
        </div>
        <div class="box-card-content">
          <template v-if="messages.has_read_messages.length > 0">
            <div v-for="msg in messages.has_read_messages" :key="msg.id" class="box-card-item">
              <span>
                <router-link :to="{}">
                  {{ msg.author.loginname }}
                </router-link>
                回复了你的话题
                <router-link :to="{name: 'topic', query: {id: `${msg.topic.id}#${msg.reply.id}`}}">
                  {{ msg.topic.title }}
                </router-link>
              </span>
            </div>
          </template>
          <template v-else>
            <p>无消息</p>
          </template>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '~/components/NavBar';
export default {
  components: {
    NavBar
  },
  computed: {
    // 从 store 的 state 对象中获取 topic
    ...mapGetters({
      messages: 'user/messages',
      accesstoken: 'user/accesstoken',
      loading: 'user/loading'
    })
  },
  mounted() {
    const _self = this;
    setTimeout(() => {
      // 添加 persistedstate.js 中间件后，需要设置setTimout 0ms 后刷新页面才不会报错（accesstoken不会立即获取到值）
      _self.fetchMessages();
    }, 0);
  },
  methods: {
    async fetchMessages() {
      try {
        const params = {
          accesstoken: this.accesstoken
        };
        const messages = await this.$store.dispatch('user/getMessages', params);
        if (messages.success) {
        } else {
          this.$message({
            message: messages.error_msg,
            type: 'error'
          });
        }
        console.log('messages: ', messages);
      } catch (error) {
        console.log(error);
        this.$message({
          message: error.error_msg || error.message,
          type: 'error'
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.msg-container {
  .box-card {
    margin: 0 5px;
    border-radius: 4px 4px 0 0;
    .box-card-item {
      a {
        color: #02b3ff;
        max-width: 460px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: middle;
        &:active,
        &:hover {
          color: #08c;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

<style lang="postcss">
.msg-container {
  .el-card.box-card {
    border: none;
    .el-card__header {
      padding: 10px;
      background-color: #f6f6f6;
    }
  }
}
</style>
