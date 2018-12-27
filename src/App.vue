<template>
  <div id="app" class="app flexRow">
    <app-sidebar className="app-aside" v-if="!this.$store.state.resolution.mobile"></app-sidebar>
    <transition name="slide">
      <app-callback v-if="isActive"></app-callback>
    </transition>
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
let resolution = {
  mobile: window.matchMedia('(max-width: 575px)')
};

import Sidebar from './components/Sidebar'
import Callback from './components/Callback'
import Header from './components/Header'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
      isActive() {
          return this.$store.state.isAct
      }
  },
  components: {
    appSidebar: Sidebar,
    appCallback: Callback,
    appHeader: Header
  },
  created() {
    var that = this;
    function checkResolution(e) {
      if(e.matches) {
        that.$store.dispatch('setResolution', true)
      } else {
        that.$store.dispatch('setResolution', false)
      }
    }
    checkResolution(resolution.mobile)
    resolution.mobile.addListener(checkResolution)
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
    overflow-y: auto;
  }
  &-views {
    min-height: 100%;
    &:not(.noPadding) {
      padding-right: 30px;
      padding-bottom: 30px;
      padding-left: 75px;
    }
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

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(340px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateX(0)
    }
    to {
        opacity: 0;
        transform: translateX(340px)
    }
}

.slide-enter-active {
    animation: slideIn .3s ease-out forwards;
}

.slide-leave-active {
    animation: slideOut .3s ease-out forwards;
}

@media (max-width: 1200px) {
  .app {
    &-views {
      &:not(.noPadding) {
        padding-left: 30px;
      }
    }
  }
}

@media (max-width: 767px) {
  .app {
    &-views {
      &:not(.noPadding) {
        padding-left: 15px;
      }
    }
  }
}

@media (max-width: 575px) {
  .app {
    &-content {
      width: 100%;
    }
  }
}
</style>

