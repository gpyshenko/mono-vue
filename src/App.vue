<template>
  <div id="app" class="app flexRow">
    <app-sidebar className="app-aside"></app-sidebar>
    <div class="flexColumn app-content">
      <app-header></app-header>
      <main class="app-main">
        <router-view></router-view>
      </main>
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
  overflow: hidden;
  &-content {
    width: 100%;
  }
  &-main {
    height: calc(100% - 60px);
  }
  &-views {
    height: 100%;
    padding-left: 75px;
    overflow-y: auto;
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

