<template>
  <div class="topic_list">
    <div
      v-for="topic in topics"
      :key="topic.id + '-' + Math.random() "
      class="cell"
    >
      <a
        href="javascript:;"
        class="user_avatar pull-left"
        @click="toPersonCenter(topic)"
      >
        <img
          :src="topic.author.avatar_url"
          :title="topic.author.loginname"
        />
      </a>
      <span class="reply_count pull-left">
        <span
          class="count_of_replies"
          title="回复数"
        >
          {{ topic.reply_count }}
        </span>
        <span class="count_seperator">/</span>
        <span
          class="count_of_visits"
          title="点击数"
        >
          {{ topic.visit_count }}
        </span>
      </span>

      <a
        class="last_time pull-right"
        href="javascript:;"
        @click="toTopicDetail(topic)"
      >
        <!-- <img
          class="user_small_avatar"
          :src="topic.img"
          :title="topic.name"
        /> -->
        <span class="last_active_time">{{ topic.last_reply_at | formatDate }}</span>
      </a>

      <div class="topic_title_wrapper">
        <span :class="{ 'tag': true, [getTagInfo(topic).className]: true }">{{ getTagInfo(topic).text }}</span>
        <a
          class="topic_title"
          href="javascript:;"
          :title="topic.title"
          @click="toTopicDetail(topic)"
        >
          {{ topic.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/utils/time'
export default {
  filters: {
    formatDate (date) {
      return formatDate(date)
    }
  },
  props: {
    topics: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getTagInfo (topic) {
      if (topic.top) {
        return {
          text: '置顶',
          className: 'top'
        }
      }
      if (topic.good) {
        return {
          text: '精华',
          className: 'good'
        }
      }

      switch (topic.tab) {
        case 'ask': {
          return {
            text: '问答',
            className: topic.tab
          }
        }
        case 'share': {
          return {
            text: '分享',
            className: topic.tab
          }
        }
        case 'job': {
          return {
            text: '招聘',
            className: topic.tab
          }
        }
        case 'good': {
          return {
            text: '精华',
            className: topic.tab
          }
        }
        case 'dev': {
          return {
            text: '测试',
            className: topic.tab
          }
        }
        default: {
          return {
            text: '',
            className: 'default'
          }
        }
      }
    },
    toTopicDetail (row) {
      const { id } = row;
      this.$router.push({
        name: 'topic',
        query: { id }
      });
    }
  }
}
</script>

<style lang="postcss" scoped>
.cell {
  position: relative;
  padding: 10px;
  font-size: 14px;
  line-height: 2em;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  &:first-of-type {
    border-top: none;
  }

  a {
    color: #778087;
  }
  .user_avatar {
    img {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
  }

  .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }

  .count_of_replies {
    color: #9e78c0;
  }

  .count_seperator {
    // margin: 0 -3px;
    font-size: 10px;
  }

  .count_of_visits {
    font-size: 10px;
    color: #b4b4b4;
  }
  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;

    .user_small_avatar {
      display: none;
      height: 18px;
      width: 18px;
      vertical-align: middle;
      margin-right: 0.5em;
      border-radius: 3px;
    }

    .last_active_time {
      text-align: right;
      min-width: 50px;
      display: inline-block;
      white-space: nowrap;
    }
  }
  .topic_title_wrapper {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .tag {
    padding: 2px 4px;
    border-radius: 3px;
    color: #999;
    background-color: #e5e5e5;
    font-size: 12px;
    margin-right: 5px;
    font-weight: 500;
    &.good,
    &.top {
      background: #80bd01;
      color: #fff;
    }
  }

  .topic_title {
    color: #333;
    max-width: 70%;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
    &:visited {
      color: #888;
    }
    &:visited,
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
