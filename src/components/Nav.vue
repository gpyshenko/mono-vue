<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="nav-link">{{link.title}}</a>
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
                    "url": "index"
                },
                {
                    "title": "О нас",
                    "url": "about"
                },
                {
                    "title": "Разработки",
                    "url": "portfolio"
                },
                {
                    "title": "Локация",
                    "url": "maps"
                },
                {
                    "title": "Контактики",
                    "url": "contacts"
                }
            ]
        }
    }
}
</script>
