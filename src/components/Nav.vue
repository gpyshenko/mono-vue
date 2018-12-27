<template>
  <nav class="nav">
    <ul class="flexRow nav-list">
      <li class="nav-item" v-for="(link, index) in links" :key="index"> 
        <router-link :to="link.url" :exact="link.url === '/'" class="nav-link">{{link.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    "title": "Главная",
                    "url": "/"
                },
                {
                    "title": "О нас",
                    "url": "/about"
                },
                {
                    "title": "Портфолио",
                    "url": "/portfolio"
                },
                {
                    "title": "Локация",
                    "url": "/map"
                },
                {
                    "title": "Контакты",
                    "url": "/contacts"
                }
            ]
        }
    }
}
</script>
<style>
.nav {
    align-items: center;
    &-list {
        list-style: none;
    }
    &-item {
        margin-right: 48px;
    }
    &-link {
        color: var(--lynch);
        transition: color .2s ease-out;
        &:hover, &.current {
            color: var(--torchRed);
        }
    }
}

@media (max-width: 1200px) {
    .nav {
        &-item {
            margin-right: 30px;
        }
    }
}

@media (max-width: 992px) {
    .nav {
        &-item {
            margin-right: 15px;
        }
    }
}
</style>