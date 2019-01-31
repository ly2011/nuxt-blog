<template>
  <div class="msg-container container">
    <div
      id="main"
      class="clearfix"
    >
      <side-bar />
      <div id="content">
        <div class="panel">
          <header class="header">
            <breadcrumb :breadcrumb="breadcrumb" />
          </header>
          <div class="inner">
            <template v-if="messages.hasnot_read_messages.length > 0">
              <div
                v-for="msg in messages.has_read_messages"
                :key="msg.id"
                class="cell"
              >
                <span>
                  <router-link
                    :to="{ path: `/user/${msg.author.loginname}` }"
                    target="_blank"
                  >
                    {{ msg.author.loginname }}
                  </router-link>
                  回复了你的话题
                  <router-link
                    :to="{ path: `/topic/${msg.id}` }"
                    target="_blank"
                  >
                    {{ msg.topic.title }}
                  </router-link>
                </span>
              </div>
            </template>
            <template v-else>
              <p>无消息</p>
            </template>
          </div>
        </div>

        <div class="panel">
          <header class="header">
            <span class="col_fade">过往信息</span>
          </header>
          <div :class="{ inner: true, 'has-msg': messages.has_read_messages.length > 0 }">
            <template v-if="messages.has_read_messages.length > 0">
              <div
                v-for="msg in messages.has_read_messages"
                :key="msg.id"
                class="cell"
              >
                <span>
                  <router-link
                    :to="{ path: `/user/${msg.author.loginname}` }"
                    target="_blank"
                  >
                    {{ msg.author.loginname }}
                  </router-link>
                  回复了你的话题
                  <!-- <router-link :to="{name: 'topic', query: {id: `${msg.topic.id}#${msg.reply.id}`}}"> -->
                  <router-link
                    :to="{ path: `/topic/${msg.id}` }"
                    target="_blank"
                  >
                    {{ msg.topic.title }}
                  </router-link>
                </span>
              </div>
            </template>
            <template v-else>
              <p>无消息</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SideBar from '~/components/SideBar';
import Breadcrumb from '~/components/Breadcrumb';
export default {
  components: {
    SideBar,
    Breadcrumb
  },
  data () {
    return {
      breadcrumb: [
        { title: '主页', active: false },
        { title: '新消息', active: true }
      ]
    }
  },
  computed: {
    // 从 store 的 state 对象中获取 topic
    ...mapGetters({
      messages: 'user/messages',
      accesstoken: 'user/accesstoken',
      loading: 'user/loading'
    })
  },
  mounted () {
    const _self = this;
    setTimeout(() => {
      // 添加 persistedstate.js 中间件后，需要设置setTimout 0ms 后刷新页面才不会报错（accesstoken不会立即获取到值）
      _self.fetchMessages();
    }, 0);
  },
  methods: {
    async fetchMessages () {
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
.panel {
  .header {
    .col_fade {
      color: #444;
    }
  }
  p {
    margin: 0 0 10px;
  }

  .cell {
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
    a {
      color: #08c;
    }
  }
  .inner {
    &.has-msg {
      padding: 0;
      border-radius: 0;
    }
  }
}
</style>
