<template>
  <section class="container">
    <div>

      <header class="header">
        <h3 class="title" v-text="topic.title"></h3>
      </header>

      <div class="content" v-html="topic.content"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async asyncData({ store, route, query }) {
    // 触发 action 后, 会返回 Promise
    const { id = '' } = query;
    const data = await store.dispatch('topic/getTopic', id);
  },
  computed: {
    // 从 store 的 state 对象中获取 topic
    ...mapGetters({
      topic: 'topic/topic',
      loading: 'topic/loading'
    })
  }
};
</script>

<style lang="postcss">

</style>
