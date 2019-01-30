<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="navbar-container">
        <el-menu mode="horizontal" @select="SelectMenu">
          <el-menu-item index="1">
            <router-link :to="{ name: 'index', exact: true }">
              首页
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{ name: 'my-messages' }">
              未读信息
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            新手入门
          </el-menu-item>
          <el-menu-item index="4">
            API
          </el-menu-item>
          <el-menu-item index="5">
            关于
          </el-menu-item>
          <el-menu-item index="6">
            设置
          </el-menu-item>
          <el-menu-item index="7">
            <span v-if="accesstoken">
              退出
            </span>
            <span v-else>
              登录
            </span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      accesstoken: 'user/accesstoken'
    })
  },
  methods: {
    async LogOut() {
      const _self = this;
      await this.$store.dispatch('user/fedLogOut');
      this.$message({
        message: '退出成功',
        type: 'success'
      });
      setTimeout(() => {
        _self.$router.push({
          name: 'index'
        });
      }, 2000);
    },
    SelectMenu(key, keyPath) {
      if (key === '7') {
        if (this.accesstoken) {
          this.LogOut();
        } else {
          this.$router.push({
            name: 'login'
          });
        }
      }
      // console.log(key, typeof key, keyPath);
    }
  }
};
</script>

<style lang="postcss" scoped>

</style>
