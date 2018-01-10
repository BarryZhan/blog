<template>
  <div class="slider-bar">
    <button class="slider-toggle">Menu</button>
    <ul class="site-nav">
      <li v-for="nav in navLinks">
        <router-link :to="nav.to">{{nav.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'slider-bar',
    data () {
      return {
        open: false,
        navLinks: [
          {to: '/', name: '首页'}
        ]
      }
    }
  }
</script>
