<template>
  <ol
    v-if="breadcrumb && breadcrumb.length"
    class="breadcrumb"
  >
    <li
      v-for="item in breadcrumb"
      :key="item.title"
      :class="{'active': item.active}"
    >
      <template v-if="!item.active">
        <nuxt-link to="/">{{ item.title }}</nuxt-link>
        <span class="divider">/</span>
      </template>
      <template v-else>{{ item.title }}</template>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="postcss" scoped>
.breadcrumb {
  padding: 0;
  margin: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  list-style: none;

  > li {
    display: inline-block;
    line-height: 20px;
  }

  a {
    color: #80bd01;
  }
  .active {
    color: #999;
  }
  .divider {
    padding: 0 5px;
    color: #ccc;
  }
}
</style>
