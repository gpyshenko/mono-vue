<template>
    <aside class="flexColumn sidebar" :class="className">
        <div class="sidebar-logo">
            <app-logo></app-logo>
        </div>
        <div class="sidebar-socials">
            <app-socials></app-socials>
        </div>
    </aside>
</template>
<script>

import Logo from './Logo';
import Socials from './Socials';
export default {
    props: ['className'],
    components: {
        appLogo: Logo,
        appSocials: Socials
    }
}
</script>

<style>
.sidebar {
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    width: 66px;
    padding: 18px 0 60px;
    background-color: var(--blackPearl-light);
}
</style>
