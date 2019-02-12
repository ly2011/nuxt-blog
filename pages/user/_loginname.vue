<template>
  <section class="user-info-container container">
    <div id="main">
      <side-bar />
      <div id="content">
        <div class="panel">
          <header class="header">
            <breadcrumb :breadcrumb="breadcrumb" />
          </header>
          <div class="inner user_info">
            <div class="user_big_avatar">
              <img
                :src="userInfo.avatar_url"
                :title="userInfo.loginname"
              >
            </div>
            <a
              class="dark"
              href="javascript:;"
            >{{ userInfo.loginname }}</a>
            <div class="user_profile">
              <ul class="unstyled">
                <span class="big">{{ userInfo.score }}</span>
                积分
                <li>
                  <a
                    class="dark"
                    href="javascript:;"
                  >
                    <span class="big collect-topic-count">{{ collectTopicCount }}</span>
                    个话题收藏
                  </a>
                </li>
                <li>
                  <i class=""></i>
                  <a
                    class="dark"
                    href="javascript:;"
                  >@{{ userInfo.githubUsername }}</a>
                </li>
              </ul>
            </div>

            <p class="col_fade">注册时间 {{ userInfo.create_at | formatDate }}</p>
          </div>
        </div>

        <div class="panel">
          <header class="header">
            <span class="col_fade">最近创建的话题</span>
          </header>
          <div class="inner">
            <topic-list :topics="userInfo.recent_topics" />
          </div>
        </div>

        <div class="panel">
          <header class="header">
            <span class="col_fade">最近参与的话题</span>
          </header>
          <div class="inner">
            <topic-list :topics="userInfo.recent_replies" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getUserInfo, getTopicCollect } from '~/api/cnode'
import { formatDate } from '~/utils/time'
import SideBar from '~/components/SideBar';
import Breadcrumb from '~/components/Breadcrumb'
import TopicList from '~/components/TopicList';
export default {
  filters: {
    formatDate (date) {
      return formatDate(date)
    }
  },
  components: {
    SideBar,
    Breadcrumb,
    TopicList
  },
  data () {
    return {
      breadcrumb: [
        { title: '主页', active: false },
        { title: '用户详情页', active: true }
      ],
      collectTopicCount: 0,
      userInfo: {
        loginname: '',
        avatar_url: '',
        githubUsername: '',
        create_at: '',
        score: '',
        recent_topics: [],
        recent_replies: []
      }
    }
  },
  async asyncData ({ store, route, query, params }) {
    // 触发 action 后, 会返回 Promise
    try {
      const user_info = await getUserInfo(params.loginname)
      if (user_info.success) {
        return { userInfo: user_info.data }
      }
      return {}
    } catch (err) {
      console.error(err)
      return {}
    }
  },
  created () {
    this.getCollectTopicCount()
  },
  methods: {
    async getCollectTopicCount () { // 话题收藏数
      try {
        console.log(this.$route.params)
        const { loginname } = this.$route.params
        const { data: collectTopic, success } = await getTopicCollect(loginname)
        success && Array.isArray(collectTopic) && (this.collectTopicCount = collectTopic.length || 0)
      } catch (error) {

      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.user_profile {
  margin-top: 20px;
  clear: left;
}
.panel {
  .user_big_avatar {
    float: left;
    margin-right: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 3px;
    }
  }
  .user_info {
    .col_fade {
      margin-bottom: 10px;
    }
  }
  .header {
    .col_fade {
      color: #444;
    }
  }
  /deep/ {
    .topic_list {
      .cell a {
        color: #08c;
      }
      .topic_title_wrapper .tag,
      .reply_count {
        /* display: none; */
        visibility: hidden;
      }
    }
  }
}
</style>
