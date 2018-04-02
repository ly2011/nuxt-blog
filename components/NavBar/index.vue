<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="navbar-container">
        <el-menu mode="horizontal" @select="SelectMenu">
          <el-menu-item index="1">
            <router-link :to="{ name: 'index', exact: true }">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{ name: 'my-messages', exact: true }">未读信息</router-link>
          </el-menu-item>
          <el-menu-item index="3">新手入门</el-menu-item>
          <el-menu-item index="4">API</el-menu-item>
          <el-menu-item index="5">关于</el-menu-item>
          <el-menu-item index="6">设置</el-menu-item>
          <el-menu-item index="7">退出</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async LogOut() {
      const _self = this;
      this.$store.dispatch('user/fedLogOut');
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
        this.LogOut();
      }
      console.log(key, typeof key, keyPath);
    }
  }
};
</script>

<style lang="postcss" scoped>

</style>

