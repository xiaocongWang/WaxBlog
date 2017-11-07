<template>
  <div class="view-home">
    <top-menu :bgImg="bgImg">
      <div class="heading">
        <h1>Wax Blog</h1>
        <p class="subheading">用心生活，用心做事</p>
      </div>
    </top-menu>
    <div class="container">
      <ul class="preview-wrap">
        <li v-for="item of articalList" :key="item.id" class="preview-box">
          <router-link :to="`/article/${item.id}`">
            <h2 class="post-title">{{item.title}}</h2>
            <p class="post-content-preview">{{item.detail}}</p>
          </router-link>
          <p class="post-date">Posted by Wax on {{item.postDate}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchArticalList } from '../api';
import topMenu from '@/components/topMenu';

export default {
  name: 'home',
  data() {
    return {
      bgImg: '"static/img/home-bg.jpg"',
      articalList: [],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  },
  methods: {
    getArticalList() {
      const params = {
        pageIndex: 0,
        pageSize: 10,
      };
      fetchArticalList({ params }).then((res) => {
        const { data } = res;
        const length = data.length;

        for (let i = 0; i < length; i += 1) {
          const item = data[i];
          const dateArray = item.postDate.split('-');
          item.postDate = `${this.months[parseInt(dateArray[1], 10) - 1]} ${dateArray[2]}，${dateArray[0]}`;
        }
        this.articalList = data;
      });
    },
  },
  components: {
    topMenu,
  },
  mounted() {
    this.getArticalList();
  },
};
</script>

<style lang="stylus" scoped>
  @import '../styles/_variable.styl';
  .view-home
    .heading
      padding 150px 0
      color color_white
      h1
        font-size font_size_80
      .subheading
        font-size font_size_18
        margin-top 20px
    .container
      width 1200px
      margin 0 auto
      text-align left
      .preview-box
        padding-bottom 30px
        border-bottom 1px solid #eee;
        a
          color inherit
        .post-title
          font-size 26px
          margin 30px 0 10px
          &:hover
            color rgb(14, 114, 143)
        .post-content-preview
          font-size 14px
          color #a3a3a3
          font-style italic
          line-height 1.5
          &:hover
            color: #0085a1;
        .post-date
          font-size font_size_18
          font-family: Lora,'Times New Roman',serif;
          color: #ccc;
          font-style: italic;
          line-height 1.7
</style>
