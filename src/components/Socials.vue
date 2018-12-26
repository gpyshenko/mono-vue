<template>
    <ul class="socials">
        <li class="socials-item" v-for="(link,index) in links" :key="index">
            <a href="" class="socials-link">
                <i :class="'icon-' + link.icon"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    url: '',
                    icon: 'telegram'
                },
                {
                    url: '',
                    icon: 'instagram'
                },
                {
                    url: '',
                    icon: 'facebook'
                },
                {
                    url: '',
                    icon: 'vkontakte'
                }
            ]
        }
    }
}
</script>

<style>
.socials {
    list-style: none;
    &-item {
        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }
    &-link {
        padding: 8px;
        font-size: 12px;
        text-align: center;
        color: #fff;
        transition: color .2s ease-out;
        &:hover {
            color: var(--cerise);
        }
    }
}
</style>