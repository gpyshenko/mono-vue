<template>
    <a href="" class="work">
        <div class="work-img" :style="{backgroundImage: `url('${require('../assets/img/works/work'+ img +'.jpg')}')`}">
        </div>
    </a>
</template>

<script>
export default {
    props: ['img', 'alt']
}
</script>

<style>
.work {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        transition: transform .2s ease-out;
    }
    &:hover {
        .work {
            &-img {
                transform: scale(1.1);
            }
        }
    }
}
</style>
