<template>
    <header class="header">
        <div class="header-nav">
            <app-nav></app-nav>
        </div>
        <div class="header-burger"></div>
    </header>
</template>

<script>
import Nav from './Nav.vue'
export default {
    components: {
        appNav: Nav
    }
}
</script>
