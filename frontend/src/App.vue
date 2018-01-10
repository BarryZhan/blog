<template>
  <div id="app">
    <header class="header">
      <a href="/" class="header-logo">
        <img src="https://barry.pw/favicon.png" alt="logo">
      </a>
      <nav class="site-nav">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/" class="menu-link">blog</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-link">tag</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-link">archives</router-link>
          </li>
          <li class="menu-item">
            <a href="https://github.com/BarryZhan" class="menu-link" target="_blank">github</a>
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import sliderBar from './components/slider-bar/slider-bar.vue'

  export default {
    name: 'app',
    components: {
      sliderBar
    }
  }
</script>

<style>
</style>
