<template>
  <div class="top-menu">
    <nav class="navbar f-clear">
      <div class="navbar-left navbar-header">
        <router-link to="/">Wax Blog</router-link>
      </div>
      <div class="navbar-right navbar-nav">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/">CATEGORY</router-link></li>
          <li><router-link to="/article/add">POST</router-link></li>
        </ul>
      </div>
    </nav>
    <header class="intro-header" :style='{backgroundImage: `url(${bgImg})`}'>
     <slot></slot>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: ['bgImg'],
};
</script>
<style lang="stylus" scoped>
  @import '../styles/_variable.styl';
  .top-menu
    position relative
    .navbar
      position absolute
      box-sizing border-box
      width: 100%
      padding 0 15px
      color color_white
      .navbar-header
        padding 20px 0
        a
          color color_white
          font-weight 800
      .navbar-nav
        li
          display inline-block
        a
          display inline-block
          padding 20px
          color color_white
          font-weight 800
          font-size 12px
          &:hover
            color: rgba(255,255,255,.8)
    .intro-header
      background #ccc center center no-repeat
      background-size cover
      margin-bottom 20px

</style>


