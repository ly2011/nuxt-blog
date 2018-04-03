<template>
  <aside id="sidebar">
    <el-card class="box-card">
      <div slot="header" class="box-card-header">
        <span>个人信息</span>
      </div>
      <div class="box-card-content">
        <div class="box-card-content-header">
          <a href="javascript:;" class="user_avatar"><img :src="userInfo.avatar_url" :alt="userInfo.loginname"></a>
          <span class="user_name">{{userInfo.loginname}}</span>
        </div>
        <div class="board">
          <span>积分：{{userInfo.score}}</span>
        </div>
        <div class="bottom">
          <span class="signature">“ 这家伙很懒，什么个性签名都没有留下。 ”</span>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" v-show="accesstoken">
      <div class="box-card-content">
        <el-button type="success" size="small" @click="toCreateTopic">发布话题</el-button>
      </div>
    </el-card>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // 从 store 的 state 对象中获取 topics
    ...mapGetters({
      accesstoken: 'user/accesstoken',
      loginInfo: 'user/loginInfo',
      userInfo: 'user/userInfo'
    })
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      try {
        if (this.loginInfo.loginname) {
          const userRes = await this.$store.dispatch(
            'user/getUserInfo',
            this.loginInfo.loginname
          );
        }
      } catch (error) {}
    },
    toCreateTopic() {
      this.$router.push({
        name: 'topic-create'
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
#sidebar {
  .box-card {
    margin-bottom: 15px;

    .user_avatar {
      vertical-align: middle;
      margin-right: 10px;

      img {
        width: 48px;
        height: 48px;
        border-radius: 3px;
      }
    }

    .user_name {
      font-size: 16px;
      max-width: 120px;
      display: inline-block;
      vertical-align: middle;

      /* 省略号 */
    }
    .board {
      margin-top: 10px;
      width: 80%;
    }
    .signature {
      font-style: italic;
      font-size: 14px;
    }
  }
}
</style>

