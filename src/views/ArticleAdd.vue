<template>
  <div class="article-add"> 
    <header>
      <h2>
        <input type="text" class="title" placeholder="Post Title" autofocus="autofocus">
      </h2>
    </header>
    <section class="article-content">
      <section class="markdown-wrap">
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      </section>
      <section class="markdown-preview markdown-body" v-html="markdownView">
      </section>
    </section>
    
  </div>
</template>
<script>
import { markdown2html } from '../utils';

export default {
  data() {
    return {
      content: '',
    };
  },
  computed: {
    markdownView() {
      return markdown2html(this.content);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .article-add
    height 100%
    header
      position absolute
      top 0
      left 0
      padding 0 20px
      border 1px solid #dfe1e3
      width 100%
      h2
        padding 15px 0
        .title
          height 30px
          width 100%
          font-size 30px
          border 0          
    .article-content
      display flex
      height 100%
      padding-top 62px
      .markdown-wrap
        display flex
        flex-direction column
        width 50%
        height 100%
        textarea
          width 100%
          height 100%
          padding 21px 20px 36px
          font-size 16px
          border none
          border-right 1px solid #dfe1e3
          resize: none;
      .markdown-preview
        display flex
        flex-direction column
        width 50%
        padding 21px 20px 36px
</style>
<style src="../styles/github-markdown.css"></style>

