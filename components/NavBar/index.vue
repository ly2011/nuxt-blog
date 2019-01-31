<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="navbar-container">
        <div class="logo">
          <a
            href="javascript:;"
            class="brand"
            @click="toHome"
          >
            <img
              src="~/assets/img/cnodejs_light.svg"
              alt="cnodejs"
            />
          </a>
          <el-form
            :model="searchData"
            @submit.native.prevent
          >
            <el-input
              v-model="searchData.q"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              size="mini"
              @keyup.enter="toSearch"
            >
            </el-input>
          </el-form>>
        </div>

        <ul class="nav">
          <template v-for="nav in navbarList">
            <li
              v-if="nav.show"
              :key="nav.name || nav.path"
            >
              <nuxt-link :to="{name: nav.name, exact: nav.exact}">
                {{ nav.title }}
              </nuxt-link>
            </li>
          </template>

          <!--           <el-menu
            mode="horizontal"
            @select="SelectMenu"
          >
            <el-menu-item index="1">
              <router-link :to="{ name: 'index', exact: true }">
                首页
              </router-link>
            </el-menu-item>
            <el-menu-item
              v-if="accesstoken"
              index="2"
            >
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
          </el-menu> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const navBars = [
  {
    name: 'index',
    path: '/',
    title: '首页',
    exact: true,
    show: true
  },
  {
    name: 'my-messages',
    path: '/my/messages',
    title: '未读信息',
    exact: true,
    show: false
  },
  {
    name: 'getstart',
    path: '/getstart',
    title: '新手入门',
    exact: true,
    show: false
  },
  {
    name: 'api',
    path: '/api',
    title: 'API',
    exact: true,
    show: false
  },
  {
    name: 'about',
    path: '/about',
    title: '关于',
    exact: true,
    show: false
  },
  {
    name: 'setting',
    path: '/setting',
    title: '设置',
    exact: true,
    show: false
  },
  {
    name: 'register',
    path: '/register',
    title: '注册',
    exact: true,
    show: false
  },
  {
    name: 'login',
    path: '/login',
    title: '登录',
    exact: true,
    show: false
  },
  {
    name: 'logout',
    path: '/logout',
    title: '退出',
    exact: true,
    show: false
  }
]
export default {
  data () {
    return {
      navBars: JSON.parse(JSON.stringify(navBars)),
      searchData: {
        q: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      accesstoken: 'user/accesstoken'
    }),
    navbarList () {
      const tmpNavBars = JSON.parse(JSON.stringify(navBars))
      const needDeleteWhenLogin = ['register', 'login']
      const needDeleteWhenNotLogin = ['my-messages', 'logout']

      const newNavBars = tmpNavBars.map((nav) => {
        if (this.accesstoken) {
          nav.show = !needDeleteWhenLogin.includes(nav.name)
        } else {
          nav.show = !needDeleteWhenNotLogin.includes(nav.name)
        }
        return nav
      })

      return newNavBars
    }
  },
  methods: {
    async LogOut () {
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
    toHome () {
      this.$router.push({
        name: 'index'
      });
    },
    toSearch () {
      window.location.href = `https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+${this.searchData.q}`
    },
    SelectMenu (key, keyPath) {
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
.navbar {
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  position: relative;
  background-color: #444;
  font-size: 13px;
  overflow: visible;

  &-inner {
    width: 90%;
    margin: auto;
    padding: 5px;
    min-height: 40px;
  }

  &-container {
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    /deep/ {
      .el-input__inner {
        background-color: #888;
        color: #666;
        border-radius: 15px;
        border-color: #888;
      }
      .el-input.is-active .el-input__inner,
      .el-input__inner:hover,
      .el-input__inner:focus {
        background-color: #fff;
        border-color: #fff;
        outline: 0;
      }
    }
  }
  .brand {
    display: block;
    margin-left: -20px;
    font-size: 20px;
    width: 120px;
    padding: 3px 20px;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;

    img {
      vertical-align: initial;
    }
  }

  .nav {
    display: flex;
    /deep/ {
      .el-menu-item,
      .el-submenu__title {
        height: 30px;
        line-height: 30px;
      }
    }

    > li {
      > a {
        display: block;
        padding: 10px 15px;
        color: #ccc;
        text-decoration: none;
        &:focus,
        &:hover {
          color: #fff;
          text-decoration: none;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
