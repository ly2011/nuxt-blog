<template>
  <section class="topics-container container">
    <nav-bar></nav-bar>
    <div
      id="main"
      class="clearfix"
    >
      <side-bar></side-bar>
      <div id="content">
        <header class="header">
          <el-tabs @tab-click="changeTab">
            <el-tab-pane
              v-for="(tab, index) in topTabs"
              :key="index"
              :label="tab.title"
              :name="tab.tab"
            ></el-tab-pane>
          </el-tabs>
        </header>

        <div class="table-list">
          <el-table
            v-loading.body="loading"
            :data="topics"
            style="width: 100%"
          >
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="60px"
            ></el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              align="center"
              min-width="120"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="visit_count"
              label="浏览数"
              align="center"
              min-width="120"
            ></el-table-column>
            <el-table-column
              prop="reply_count"
              label="回复数"
              align="center"
              min-width="120"
            ></el-table-column>
            <el-table-column
              label="发表时间"
              align="center"
              min-width="120"
            >
              <template slot-scope="scope">
                {{ scope.row.create_at }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              min-width="120"
            >
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="gotoDetail( scope.row )"
                >
                  详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <div
            v-show="pageInfo.total"
            class="pagination"
          >
            <el-pagination
              :current-page="pageInfo.page"
              :page-size="pageInfo.size"
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

import NavBar from '~/components/NavBar';
import SideBar from '~/components/SideBar';

export default {
  components: {
    NavBar,
    SideBar
  },
  async asyncData({ store, route, params }) {
    // 触发 action 后, 会返回 Promise
    await store.dispatch('topics/getTopics');
    // await store.dispatch('user/getUserInfo')
  },
  data() {
    return {
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
  methods: {
    changeTab(tab, event) {
      const { name } = tab;
      if (name === this.tab) {
        return;
      }
      const params = { tab: name, page: 1 };
      this.fetchTopics(params);
    },
    fetchTopics(params = {}) {
      if (this.loading) {
        return;
      }
      this.$store.dispatch('topics/getTopics', params);
    },
    handleCurrentChange(val) {
      const params = { tab: this.tab, page: val || 1 };
      this.fetchTopics(params);
    },

    gotoDetail(row) {
      const { id } = row;
      this.$router.push({
        name: 'topic',
        query: { id }
      });
    }
  }
};
</script>

<style lang="postcss">
.topics-container {
  .header {
    margin-top: 15px;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    .el-tabs {
      .el-tabs__header {
        margin: 0;
      }
    }
  }
}
</style>
