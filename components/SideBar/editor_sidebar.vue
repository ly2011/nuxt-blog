<template>
  <div id="sidebar">
    <el-card class="box-card">
      <div slot="header" class="box-card-header">
        <span>Markdown 语法参考</span>
      </div>
      <div class="box-card-content">
        <ol>
          <li>
            <tt>### 单行的标题</tt>
          </li>
          <li>
            <tt>**粗体**</tt>
          </li>
          <li>
            <tt>`console.log('行内代码')`</tt>
          </li>
          <li>
            <tt>```js\n code \n```</tt> 标记代码块
          </li>
          <li>
            <tt>[内容](链接)</tt>
          </li>
          <li>
            <tt>![文字说明](图片链接)</tt>
          </li>
        </ol>
        <span>
          <a href="https://segmentfault.com/markdown" target="_blank">
            Markdown 文档
          </a>
        </span>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="box-card-header">
        <span>话题发布指南</span>
      </div>
      <div class="box-card-content">
        <ol>
          <li>尽量把话题要点浓缩到标题里</li>
          <li>
            代码含义和报错可在
            <a href="http://segmentfault.com/t/node.js">
              SegmentFault
            </a> 提问
          </li>
        </ol>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
#sidebar {
  .box-card {
    font-size: 13px;
    margin-bottom: 15px;

    .box-card-content {
      ol {
        margin: 4px 0;
        list-style: none;

        li {
          line-height: 2em;
        }
      }
    }
  }
}
</style>
