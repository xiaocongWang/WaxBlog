<template>
  <div class="view-home">
    <top-menu :bgImg="bgImg">
      <div class="heading">
        <h1>Wax Blog</h1>
        <p class="subheading">用心生活，用心做事</p>
      </div>
    </top-menu>
    <div class="container">
      <ul>
        <router-link tag="li" v-for="item of articalList" :key="item.id" :to="`/${item.id}`">
          
        </router-link>
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

</style>
