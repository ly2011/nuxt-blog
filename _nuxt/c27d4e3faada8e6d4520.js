(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(t,e,n){},360:function(t,e,n){"use strict";var c=n(358);n.n(c).a},363:function(t,e,n){"use strict";n(57);var c=n(6),r=n(4),o=n(42),l={data:function(){return{cardShadow:"never"}},computed:Object(r.a)({},Object(o.b)({accesstoken:"user/accesstoken",loginInfo:"user/loginInfo",userInfo:"user/userInfo"})),mounted:function(){this.fetchUserInfo()},methods:{fetchUserInfo:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!this.loginInfo.loginname){t.next=4;break}return t.next=4,this.$store.dispatch("user/getUserInfo",this.loginInfo.loginname);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}(),toCreateTopic:function(){this.$router.push({name:"topic-create"})},toLogin:function(){this.$router.push({name:"login"})},toUserInfo:function(){this.$router.push({path:"/user/".concat(this.loginInfo.loginname)})}}},d=(n(360),n(8)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{attrs:{id:"sidebar"}},[t.accesstoken?t._e():n("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("CNode：Node.js专业中文社区")])]),t._v(" "),n("div",{staticClass:"box-card-content login-box"},[n("div",{staticClass:"box-card-content-header"},[t._v("\n        您可以\n        "),n("nuxt-link",{attrs:{to:{name:"login"}}},[t._v("\n          登录\n        ")]),t._v("\n        或\n        "),n("nuxt-link",{attrs:{to:{name:"register"}}},[t._v("\n          注册\n        ")]),t._v("，也可以\n        "),n("el-button",{attrs:{type:"primary"},on:{click:t.toLogin}},[t._v("通过 GitHub 登录")])],1)])]),t._v(" "),t.accesstoken?n("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("个人信息")])]),t._v(" "),n("div",{staticClass:"box-card-content"},[n("div",{staticClass:"box-card-content-header"},[n("a",{staticClass:"user_avatar",attrs:{href:"javascript:;"},on:{click:t.toUserInfo}},[n("img",{attrs:{src:t.userInfo.avatar_url,alt:t.userInfo.loginname}})]),t._v(" "),n("span",{staticClass:"user_name"},[n("a",{staticClass:"dark",attrs:{href:"javascript:;"},on:{click:t.toUserInfo}},[t._v("\n            "+t._s(t.userInfo.loginname)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"board"},[n("span",{staticClass:"big"},[t._v("积分："+t._s(t.userInfo.score))])]),t._v(" "),n("div",{staticClass:"bottom"},[n("span",{staticClass:"signature"},[t._v("\n          “ 这家伙很懒，什么个性签名都没有留下。 ”\n        ")])])])]):t._e(),t._v(" "),t.accesstoken?n("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"box-card-content"},[n("el-button",{attrs:{type:"success",size:"small"},on:{click:t.toCreateTopic}},[t._v("\n        发布话题\n      ")])],1)]):t._e(),t._v(" "),t.accesstoken?n("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("友情社区")])]),t._v(" "),n("div",{staticClass:"box-card-content"},[n("ol",{staticClass:"friendship-community"},[n("li",[n("a",{attrs:{href:"https://ruby-china.org/",target:"_blank"}},[n("img",{attrs:{src:"//static2.cnodejs.org/public/images/ruby-china-20150529.png"}})])]),t._v(" "),n("div",{staticClass:"sep10"}),t._v(" "),n("li",[n("a",{attrs:{href:"http://golangtc.com/",target:"_blank"}},[n("img",{attrs:{src:"//static2.cnodejs.org/public/images/golangtc-logo.png"}})])]),t._v(" "),n("div",{staticClass:"sep10"}),t._v(" "),n("li",[n("a",{attrs:{href:"http://phphub.org/",target:"_blank"}},[n("img",{attrs:{src:"//static2.cnodejs.org/public/images/phphub-logo.png"}})])]),t._v(" "),n("div",{staticClass:"sep10"}),t._v(" "),n("li",[n("a",{attrs:{href:"https://testerhome.com/",target:"_blank"}},[n("img",{attrs:{src:"//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"}})])])])])]):t._e(),t._v(" "),t.accesstoken?n("el-card",{staticClass:"box-card cnode-app-download",attrs:{shadow:"never"}},[n("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("友情社区")])]),t._v(" "),n("div",{staticClass:"box-card-content"},[n("img",{attrs:{width:"200",src:"//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",alt:""}}),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/soliury/noder-react-native",target:"_blank"}},[t._v("客户端源码地址")])])]):t._e()],1)},[],!1,null,"3efee4d3",null);e.a=component.exports},372:function(t,e,n){},373:function(t,e,n){},384:function(t,e,n){"use strict";var c=n(372);n.n(c).a},385:function(t,e,n){"use strict";var c=n(373);n.n(c).a},395:function(t,e,n){"use strict";n.r(e);var c=n(4),r=(n(57),n(6)),o=n(42),l={components:{SideBar:n(363).a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,e.route,e.query,c=e.params,console.log("params: ",c),t.next=4,n.dispatch("topic/getTopic",c);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:Object(c.a)({},Object(o.b)({topic:"topic/topic",loading:"topic/loading",loginInfo:"user/loginInfo",accesstoken:"user/accesstoken"}),{isMe:function(){return!(!this.loginInfo||!this.topic.author)&&this.topic.author.loginname===this.loginInfo.loginname}}),methods:{toCollect:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={accesstoken:this.accesstoken,topic_id:this.topic.id},t.prev=1,t.next=4,this.$store.dispatch("topic/collectTopic",e);case 4:t.sent.success?(this.$message({message:"收藏成功",type:"success"}),n=Object(c.a)({},this.topic,{is_collect:!0}),this.$store.dispatch("topic/setTopic",{topic:n})):this.$message({message:"收藏失败",type:"error"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.$message({message:"收藏失败",type:"error"});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),delCollect:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={accesstoken:this.accesstoken,topic_id:this.topic.id},t.prev=1,t.next=4,this.$store.dispatch("topic/delTopic",e);case 4:t.sent.success?(this.$message({message:"取消收藏成功",type:"success"}),n=Object(c.a)({},this.topic,{is_collect:!1}),this.$store.dispatch("topic/setTopic",{topic:n})):this.$message({message:"取消收藏失败",type:"error"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.$message({message:"取消收藏失败",type:"error"});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),toEdit:function(){this.$router.push({name:"topic-edit",query:{id:this.topic.id}})},toDel:function(){}}},d=(n(384),n(385),n(8)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"topic-container container"},[n("div",{staticClass:"clearfix",attrs:{id:"main"}},[n("side-bar"),t._v(" "),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"panel"},[n("header",{staticClass:"header"},[n("span",{staticClass:"title",domProps:{textContent:t._s(t.topic.title)}}),t._v(" "),n("div",{staticClass:"changes clearfix"},[n("span",[t._v("发布于 "+t._s(t.topic.create_at))]),t._v(" "),n("span",[t._v("作者 "+t._s(t.topic.author&&t.topic.author.loginname))]),t._v(" "),n("span",[t._v(t._s(t.topic.visit_count)+" 次浏览")]),t._v(" "),n("span",[t._v("最后一次编辑是 "+t._s(t.topic.last_reply_at))]),t._v(" "),n("span",[t._v("来自 "+t._s(t.topic.tabName))]),t._v(" "),t.accesstoken&&t.topic.is_collect?n("el-button",{staticClass:"pull-right",attrs:{type:"info",size:"small"},on:{click:t.delCollect}},[t._v("\n              取消收藏\n            ")]):t.accesstoken&&!t.topic.is_collect?n("el-button",{staticClass:"pull-right",attrs:{type:"success",size:"small"},on:{click:t.toCollect}},[t._v("\n              收藏\n            ")]):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isMe,expression:"isMe"}],staticClass:"manage_topic"},[n("i",{staticClass:"edit-btn el-icon-edit-outline",on:{click:t.toEdit}}),t._v(" "),n("i",{staticClass:"del-btn el-icon-delete",on:{click:t.toDel}})])]),t._v(" "),n("div",{staticClass:"inner topic"},[n("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})])])])],1)])},[],!1,null,"4a479dcd",null);e.default=component.exports}}]);