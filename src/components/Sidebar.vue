<template>
    <aside class="flexColumn sidebar" :class="className">
        <app-logo></app-logo>
    </aside>
</template>
<script>

import Logo from './Logo';
export default {
    props: ['className'],
    components: {
        appLogo: Logo
    }
}
</script>

<style>
.sidebar {
    align-items: center;
    flex-shrink: 0;
    width: 66px;
    padding: 18px 0;
    background-color: var(--blackPearl-light);
}
</style>
