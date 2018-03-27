<template>
  <section class="container">
    <div>

      <header class="header">
        <el-tabs @tab-click="changeTab">
          <el-tab-pane v-for="(tab, index) in topTabs" :key="index" :label="tab.title" :name="tab.tab"></el-tab-pane>
        </el-tabs>
      </header>

      <div class="table-list">
        <el-table :data="topics" style="width: 100%" v-loading.body="loading">
          <el-table-column type="index" label="序号" align="center" width="60px"></el-table-column>
          <el-table-column prop="title" label="标题" align="center" min-width="120" show-overflow-tooltip></el-table-column>
          <el-table-column prop="visit_count" label="浏览数" align="center" min-width="120"></el-table-column>
          <el-table-column prop="reply_count" label="回复数" align="center" min-width="120"></el-table-column>
          <el-table-column prop="create_at" label="发表时间" align="center" min-width="120"></el-table-column>
          <el-table-column label="操作" align="center" min-width="120">
            <template slot-scope="scope">
              <el-button @click="gotoDetail( scope.row )" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="pagination" v-show="pageInfo.total">
          <el-pagination @current-change="handleCurrentChange" :current-page="pageInfo.page" :page-size="pageInfo.size" layout="total, prev, pager, next, jumper, slot" :total="pageInfo.total">
            <el-button class="jump-page-btn" size="small" type="primary">跳转</el-button>
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { format } from 'date-fns';
import { topTabs } from '~/utils/tabs';
// import { mapGetters } from 'vuex'

export default {
  components: {},
  async asyncData({ store, route, params }) {
    // 触发 action 后, 会返回 Promise
    // return store.dispatch('getTopics');
    const data = await store.dispatch('getTopics');
  },
  computed: {
    // 从 store 的 state 对象中获取 topics
    topics() {
      return this.$store.state.topics.map(topic => {
        if (topic.create_at) {
          topic.create_at = format(topic.create_at, 'YYYY-MM-DD');
        }
        return topic;
      });
    },
    loading() {
      return this.$store.state.loading;
    },
    tab() {
      return this.$store.state.tab;
    },
    pageInfo() {
      return this.$store.state.pageInfo;
    }
  },
  data() {
    return {
      topTabs
    };
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
      this.$store.dispatch('getTopics', params);
    },
    handleCurrentChange(val) {
      const params = { tab: this.tab, page: val || 1 };
      this.fetchTopics(params);
    }
  }
};
</script>

<style lang="postcss">

</style>
