(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(t,e,r){},359:function(t,e,r){},360:function(t,e,r){"use strict";var n=r(358);r.n(n).a},362:function(t,e,r){},363:function(t,e,r){"use strict";r(57);var n=r(6),c=r(4),o=r(42),l={data:function(){return{cardShadow:"never"}},computed:Object(c.a)({},Object(o.b)({accesstoken:"user/accesstoken",loginInfo:"user/loginInfo",userInfo:"user/userInfo"})),mounted:function(){this.fetchUserInfo()},methods:{fetchUserInfo:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!this.loginInfo.loginname){t.next=4;break}return t.next=4,this.$store.dispatch("user/getUserInfo",this.loginInfo.loginname);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}(),toCreateTopic:function(){this.$router.push({name:"topic-create"})},toLogin:function(){this.$router.push({name:"login"})},toUserInfo:function(){this.$router.push({path:"/user/".concat(this.loginInfo.loginname)})}}},v=(r(360),r(8)),component=Object(v.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{attrs:{id:"sidebar"}},[t.accesstoken?t._e():r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("CNode：Node.js专业中文社区")])]),t._v(" "),r("div",{staticClass:"box-card-content login-box"},[r("div",{staticClass:"box-card-content-header"},[t._v("\n        您可以\n        "),r("nuxt-link",{attrs:{to:{name:"login"}}},[t._v("\n          登录\n        ")]),t._v("\n        或\n        "),r("nuxt-link",{attrs:{to:{name:"register"}}},[t._v("\n          注册\n        ")]),t._v("，也可以\n        "),r("el-button",{attrs:{type:"primary"},on:{click:t.toLogin}},[t._v("通过 GitHub 登录")])],1)])]),t._v(" "),t.accesstoken?r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("个人信息")])]),t._v(" "),r("div",{staticClass:"box-card-content"},[r("div",{staticClass:"box-card-content-header"},[r("a",{staticClass:"user_avatar",attrs:{href:"javascript:;"},on:{click:t.toUserInfo}},[r("img",{attrs:{src:t.userInfo.avatar_url,alt:t.userInfo.loginname}})]),t._v(" "),r("span",{staticClass:"user_name"},[r("a",{staticClass:"dark",attrs:{href:"javascript:;"},on:{click:t.toUserInfo}},[t._v("\n            "+t._s(t.userInfo.loginname)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"board"},[r("span",{staticClass:"big"},[t._v("积分："+t._s(t.userInfo.score))])]),t._v(" "),r("div",{staticClass:"bottom"},[r("span",{staticClass:"signature"},[t._v("\n          “ 这家伙很懒，什么个性签名都没有留下。 ”\n        ")])])])]):t._e(),t._v(" "),t.accesstoken?r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"box-card-content"},[r("el-button",{attrs:{type:"success",size:"small"},on:{click:t.toCreateTopic}},[t._v("\n        发布话题\n      ")])],1)]):t._e(),t._v(" "),t.accesstoken?r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("友情社区")])]),t._v(" "),r("div",{staticClass:"box-card-content"},[r("ol",{staticClass:"friendship-community"},[r("li",[r("a",{attrs:{href:"https://ruby-china.org/",target:"_blank"}},[r("img",{attrs:{src:"//static2.cnodejs.org/public/images/ruby-china-20150529.png"}})])]),t._v(" "),r("div",{staticClass:"sep10"}),t._v(" "),r("li",[r("a",{attrs:{href:"http://golangtc.com/",target:"_blank"}},[r("img",{attrs:{src:"//static2.cnodejs.org/public/images/golangtc-logo.png"}})])]),t._v(" "),r("div",{staticClass:"sep10"}),t._v(" "),r("li",[r("a",{attrs:{href:"http://phphub.org/",target:"_blank"}},[r("img",{attrs:{src:"//static2.cnodejs.org/public/images/phphub-logo.png"}})])]),t._v(" "),r("div",{staticClass:"sep10"}),t._v(" "),r("li",[r("a",{attrs:{href:"https://testerhome.com/",target:"_blank"}},[r("img",{attrs:{src:"//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"}})])])])])]):t._e(),t._v(" "),t.accesstoken?r("el-card",{staticClass:"box-card cnode-app-download",attrs:{shadow:"never"}},[r("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("友情社区")])]),t._v(" "),r("div",{staticClass:"box-card-content"},[r("img",{attrs:{width:"200",src:"//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",alt:""}}),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/soliury/noder-react-native",target:"_blank"}},[t._v("客户端源码地址")])])]):t._e()],1)},[],!1,null,"3efee4d3",null);e.a=component.exports},364:function(t,e,r){"use strict";var n=r(359);r.n(n).a},365:function(t,e,r){"use strict";var n={props:{breadcrumb:{type:Array,default:function(){return[]}}}},c=(r(364),r(8)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.breadcrumb&&t.breadcrumb.length?r("ol",{staticClass:"breadcrumb"},t._l(t.breadcrumb,function(e){return r("li",{key:e.title,class:{active:e.active}},[e.active?[t._v(t._s(e.title))]:[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(e.title))]),t._v(" "),r("span",{staticClass:"divider"},[t._v("/")])]],2)}),0):t._e()},[],!1,null,"b9a678ee",null);e.a=component.exports},374:function(t,e,r){"use strict";var n=r(362);r.n(n).a},375:function(t,e,r){},378:function(t,e,r){"use strict";var time=r(124),n={filters:{formatDate:function(t){return Object(time.a)(t)}},props:{topics:{type:Array,default:function(){return[]}}},methods:{getTagInfo:function(t){if(t.top)return{text:"置顶",className:"top"};if(t.good)return{text:"精华",className:"good"};switch(t.tab){case"ask":return{text:"问答",className:t.tab};case"share":return{text:"分享",className:t.tab};case"job":return{text:"招聘",className:t.tab};case"good":return{text:"精华",className:t.tab};case"dev":return{text:"测试",className:t.tab};default:return{text:"",className:"default"}}},toTopicDetail:function(t){var e=t.id;this.$router.push({path:"/topic/".concat(e)})}}},c=(r(374),r(8)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topic_list"},t._l(t.topics,function(e){return r("div",{key:e.id+"-"+Math.random(),staticClass:"cell"},[r("a",{staticClass:"user_avatar pull-left",attrs:{href:"javascript:;"},on:{click:function(r){t.toPersonCenter(e)}}},[r("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}})]),t._v(" "),r("span",{staticClass:"reply_count pull-left"},[r("span",{staticClass:"count_of_replies",attrs:{title:"回复数"}},[t._v("\n        "+t._s(e.reply_count)+"\n      ")]),t._v(" "),r("span",{staticClass:"count_seperator"},[t._v("/")]),t._v(" "),r("span",{staticClass:"count_of_visits",attrs:{title:"点击数"}},[t._v("\n        "+t._s(e.visit_count)+"\n      ")])]),t._v(" "),r("a",{staticClass:"last_time pull-right",attrs:{href:"javascript:;"},on:{click:function(r){t.toTopicDetail(e)}}},[r("span",{staticClass:"last_active_time"},[t._v(t._s(t._f("formatDate")(e.last_reply_at)))])]),t._v(" "),r("div",{staticClass:"topic_title_wrapper"},[r("span",{class:(n={tag:!0},n[t.getTagInfo(e).className]=!0,n)},[t._v(t._s(t.getTagInfo(e).text))]),t._v(" "),r("a",{staticClass:"topic_title",attrs:{href:"javascript:;",title:e.title},on:{click:function(r){t.toTopicDetail(e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])])]);var n}),0)},[],!1,null,"cba81d8e",null);e.a=component.exports},386:function(t,e,r){"use strict";var n=r(375);r.n(n).a},393:function(t,e,r){"use strict";r.r(e);r(57);var n=r(6),c=r(13),time=r(124),o=r(363),l=r(365),v=r(378),_={filters:{formatDate:function(t){return Object(time.a)(t)}},components:{SideBar:o.a,Breadcrumb:l.a,TopicList:v.a},data:function(){return{breadcrumb:[{title:"主页",active:!1},{title:"用户详情页",active:!0}],collectTopicCount:0,userInfo:{loginname:"",avatar_url:"",githubUsername:"",create_at:"",score:"",recent_topics:[],recent_replies:[]}}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.store,e.route,e.query,r=e.params,t.prev=1,t.next=4,Object(c.i)(r.loginname);case 4:if(!(n=t.sent).success){t.next=7;break}return t.abrupt("return",{userInfo:n.data});case 7:return t.abrupt("return",{});case 10:return t.prev=10,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),created:function(){this.getCollectTopicCount()},methods:{getCollectTopicCount:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(this.$route.params),e=this.$route.params.loginname,t.next=5,Object(c.g)(e);case 5:r=t.sent,n=r.data,r.success&&Array.isArray(n)&&(this.collectTopicCount=n.length||0),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}},d=(r(386),r(8)),component=Object(d.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"user-info-container container"},[r("div",{attrs:{id:"main"}},[r("side-bar"),t._v(" "),r("div",{attrs:{id:"content"}},[r("div",{staticClass:"panel"},[r("header",{staticClass:"header"},[r("breadcrumb",{attrs:{breadcrumb:t.breadcrumb}})],1),t._v(" "),r("div",{staticClass:"inner user_info"},[r("div",{staticClass:"user_big_avatar"},[r("img",{attrs:{src:t.userInfo.avatar_url,title:t.userInfo.loginname}})]),t._v(" "),r("a",{staticClass:"dark",attrs:{href:"javascript:;"}},[t._v(t._s(t.userInfo.loginname))]),t._v(" "),r("div",{staticClass:"user_profile"},[r("ul",{staticClass:"unstyled"},[r("span",{staticClass:"big"},[t._v(t._s(t.userInfo.score))]),t._v("\n              积分\n              "),r("li",[r("a",{staticClass:"dark",attrs:{href:"javascript:;"}},[r("span",{staticClass:"big collect-topic-count"},[t._v(t._s(t.collectTopicCount))]),t._v("\n                  个话题收藏\n                ")])]),t._v(" "),r("li",[r("i",{}),t._v(" "),r("a",{staticClass:"dark",attrs:{href:"javascript:;"}},[t._v("@"+t._s(t.userInfo.githubUsername))])])])]),t._v(" "),r("p",{staticClass:"col_fade"},[t._v("注册时间 "+t._s(t._f("formatDate")(t.userInfo.create_at)))])])]),t._v(" "),r("div",{staticClass:"panel"},[t._m(0),t._v(" "),r("div",{staticClass:"inner"},[r("topic-list",{attrs:{topics:t.userInfo.recent_topics}})],1)]),t._v(" "),r("div",{staticClass:"panel"},[t._m(1),t._v(" "),r("div",{staticClass:"inner"},[r("topic-list",{attrs:{topics:t.userInfo.recent_replies}})],1)])])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("span",{staticClass:"col_fade"},[this._v("最近创建的话题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("span",{staticClass:"col_fade"},[this._v("最近参与的话题")])])}],!1,null,"4acb23e2",null);e.default=component.exports}}]);