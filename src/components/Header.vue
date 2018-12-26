<template>
    <header class="flexRow header">
        <div class="header-nav">
            <app-nav></app-nav>
        </div>
        <div class="header-burger">
            <app-burger></app-burger>
        </div>
    </header>
</template>

<script>
import Nav from './Nav'
import Burger from './Burger'
export default {
    components: {
        appNav: Nav,
        appBurger: Burger
    }
}
</script>

<style>
.header {
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px 15px 75px;
    background: var(--blackPearl-dark);
    &-burger {
        flex-shrink: 0;
    }
}

@media (max-width: 1200px) {
    .header {
        padding-left: 30px;
    }
}

@media (max-width: 767px) {
    .header {
        padding-right: 15px;
        padding-left: 15px;
    }
}
</style>
