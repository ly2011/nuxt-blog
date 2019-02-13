<template>
  <section class="topics-container container">
    <div id="main">
      <side-bar />
      <div id="content">
        <header class="header">
          <el-tabs
            v-model="curTab"
            @tab-click="changeTab"
          >
            <el-tab-pane
              v-for="(tab, index) in topTabs"
              :key="index"
              :label="tab.title"
              :name="tab.tab"
            ></el-tab-pane>
          </el-tabs>
        </header>

        <div class="table-list">
          <topic-list :topics="topics" />
          <div
            v-show="pageInfo.total"
            class="pagination"
          >
            <el-pagination
              :current-page="pageInfo.page"
              :page-size="pageInfo.limit"
              layout="total, prev, pager, next, jumper, slot"
              :total="pageInfo.total"
              @current-change="handleCurrentChange"
            >
              <el-button
                class="jump-page-btn"
                size="small"
                type="primary"
              >
                跳转
              </el-button>
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { topTabs } from '~/utils/tabs';
import { mapGetters } from 'vuex';
import SideBar from '~/components/SideBar';
import TopicList from '~/components/TopicList';

export default {
  components: {
    SideBar,
    TopicList
  },
  async asyncData ({ store, route, params }) {
    // 触发 action 后, 会返回 Promise
    await store.dispatch('topics/getTopics');
    // await store.dispatch('user/getUserInfo')
  },
  data () {
    return {
      curTab: this.tab,
      topTabs
    };
  },
  computed: {
    // 从 store 的 state 对象中获取 topics
    ...mapGetters({
      topics: 'topics/topics',
      loading: 'topics/loading',
      tab: 'topics/tab',
      pageInfo: 'topics/pageInfo'
    })
  },
  watch: {
    tab (val) { // 修复页面刷新后tab栏又回到了第一个
      this.curTab = val
      // console.log('w-tab: ', val, this.curTab)
    }
  },
  methods: {
    changeTab (tab, event) {
      const { name } = tab;
      if (name === this.tab) {
        return;
      }
      const params = { tab: name, page: 1 };
      this.fetchTopics(params);
    },
    fetchTopics (params = {}) {
      if (this.loading) {
        return;
      }
      this.$store.dispatch('topics/getTopics', params);
    },
    handleCurrentChange (val) {
      const params = { tab: this.tab, page: val || 1 };
      this.fetchTopics(params);
    },

    gotoDetail (row) {
      const { id } = row;
      this.$router.push({
        name: 'topic',
        query: { id }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.topics-container {
  .header {
    padding: 10px;
    padding-left: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    /deep/ {
      .el-tabs {
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__nav-wrap:after {
          height: 0;
        }
        .el-tabs__active-bar {
          background-color: transparent;
        }
        .el-tabs__item {
          margin: 0 10px;
          padding: 0;
          line-height: 20px;
          height: auto;
          color: #80bd01;
          &.is-active {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
          }
          &.is-bottom:nth-child(2),
          &.is-top:nth-child(2) {
          }
        }
      }
    }
  }
}
</style>
