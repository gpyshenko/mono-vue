<template>
  <div id="app" class="app flexRow">
    <app-sidebar className="app-aside"></app-sidebar>
    <div class="app-main">
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
@import './styles/main.css';
.app {
  height: 100vh;
  &-main {
    width: 100%;
  }
}

@media (max-width: 575px) {
  .app {
    &-aside {
      display: none;
    }
  }
}
</style>

