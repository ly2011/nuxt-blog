webpackJsonp([2],{"C/O4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("qZcZ"),r=i("USJ2"),o=!1;var n=function(t){o||(i("TBlh"),i("rJB2"))},p=i("VU/8")(a.a,r.a,!1,n,"data-v-62494b79",null);p.options.__file="pages\\topic.vue",e.default=p.exports},IIKz:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.container[data-v-62494b79]{text-align:left;text-align:initial;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.container .header[data-v-62494b79]{background-color:#fff;padding:10px;-webkit-border-radius:3px 3px 0 0;border-radius:3px 3px 0 0}.container .header .title[data-v-62494b79]{font-size:22px;font-weight:700;margin:8px 0;display:inline-block;width:75%;line-height:130%}.container .header .changes[data-v-62494b79]{font-size:12px;color:#838383}.container .header .changes span[data-v-62494b79]:before{content:"\\2022"}.container .topic[data-v-62494b79]{padding:10px;background-color:#fff;-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;border-top:1px solid #e5e5e5}.container .topic .topic-content[data-v-62494b79]{margin:0 10px}',""])},NITZ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"blockquote{padding:0 0 0 15px;margin:0 0 20px;border-left:5px solid #eee}.markdown-text p,.preview p{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;line-height:2em;margin:1em 0}.markdown-text>:last-child,.preview>:last-child,textarea#title{margin-bottom:1em}.markdown-text>:first-child,.preview>:first-child{margin-top:0}.markdown-text li,.preview li{font-size:14px;line-height:2em}.markdown-text li code,.markdown-text p code,.preview li code,.preview p code{color:#000;background-color:#fcfafa;padding:4px 6px}.markdown-text img{cursor:pointer}.markdown-text h1 code,.markdown-text h2 code,.markdown-text h3 code,.markdown-text h4 code,.markdown-text h5 code,.markdown-text h6 code{font-size:inherit;color:inherit}.panel .markdown-text a{color:#08c}.preview{padding:.5em;font-size:15px;min-height:200px;word-break:break-all}.preview p>img{display:block;-webkit-box-shadow:0 0 4px rgba(0,0,0,.6);box-shadow:0 0 4px rgba(0,0,0,.6)}.markdown_editor .markdown_in_editor,.markdown_editor .markdown_in_preview{display:none}.markdown_editor.in_editor .markdown_in_editor,.markdown_editor.in_preview .markdown_in_preview{display:block}textarea#title{width:98%;border:none;resize:none;height:20px}.editor_buttons{margin-top:10px}.editor_buttons>button{vertical-align:baseline}",""])},TBlh:function(t,e,i){var a=i("IIKz");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("24f14a69",a,!1,{sourceMap:!1})},USJ2:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("div",[i("header",{staticClass:"header"},[i("span",{staticClass:"title",domProps:{textContent:t._s(t.topic.title)}}),i("div",{staticClass:"changes"},[i("span",[t._v("发布于 "+t._s(t.topic.create_at))]),i("span",[t._v("作者 "+t._s(t.topic.author&&t.topic.author.loginname))]),i("span",[t._v(t._s(t.topic.visit_count)+" 次浏览")]),i("span",[t._v("最后一次编辑是 "+t._s(t.topic.last_reply_at))]),i("span",[t._v("来自 ")])])]),i("div",{staticClass:"topic"},[i("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})])])])};a._withStripped=!0;var r={render:a,staticRenderFns:[]};e.a=r},qZcZ:function(t,e,i){"use strict";var a=i("Dd8w"),r=i.n(a),o=i("Xxa5"),n=i.n(o),p=i("exGp"),d=i.n(p),c=i("NYxO");e.a={asyncData:function(){var t=d()(n.a.mark(function t(e){var i,a,r=e.store,o=(e.route,e.query);return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.id,a=void 0===i?"":i,t.next=3,r.dispatch("topic/getTopic",a);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:r()({},Object(c.mapGetters)({topic:"topic/topic",loading:"topic/loading"}))}},rJB2:function(t,e,i){var a=i("NITZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("0ae0ad59",a,!1,{sourceMap:!1})}});