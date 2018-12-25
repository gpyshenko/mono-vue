<template>
  <div id="app">
    <div class="aside">
      <app-sidebar></app-sidebar>
    </div>
    <div class="main">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Header from './components/Header'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appSidebar: Sidebar,
    appHeader: Header
  }
}
</script>

<style>
  .app {
    background-color: #fff;
  }
</style>
