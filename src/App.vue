<template>
  <div id="app" class="app flexRow">
    <app-sidebar className="app-aside"></app-sidebar>
    <div class="flexColumn app-content">
      <app-header></app-header>
      <main class="app-main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
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
    width: calc(100% - 66px);
  }
  &-main {
    height: calc(100% - 60px);
  }
  &-views {
    height: 100%;
    padding-left: 75px;
    padding-right: 30px;
    overflow-y: auto;
  }
}

.fade-enter-active {
  animation: fadeIn .2s ease-out forwards;
}

.fade-leave-active {
  animation: fadeOut .2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (max-width: 1200px) {
  .app {
    &-views {
      padding-left: 30px;
    }
  }
}

@media (max-width: 767px) {
  .app {
    &-views {
      padding-left: 15px;
    }
  }
}

@media (max-width: 575px) {
  .app {
    &-aside {
      display: none;
    }
    &-content {
      width: 100%;
    }
  }
}
</style>

