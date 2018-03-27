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
          <el-table-column label="发表时间" align="center" min-width="120">
            <template slot-scope="scope">
              {{ scope.row.create_at }}
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" min-width="120">
            <template slot-scope="scope">
              <el-button @click="gotoDetail( scope.row )" size="small">详情</el-button>
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
import { topTabs } from '~/utils/tabs';
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store, route, params }) {
    // 触发 action 后, 会返回 Promise
    await store.dispatch('topics/getTopics');
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

</style>
