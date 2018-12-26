<template>
    <div class="feature">
        <p class="feature-num">{{num}} +</p>
        <p class="feature-subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
export default {
    props: ['num','subtitle']
}
</script>

<style>
.feature {
    color: #fff;
    &-num {
        margin-bottom: 20px;
        font-size: 72px;
        font-weight: 900;
        color: #fff;
    }
    &-subtitle {
        max-width: 180px;
        font-size: 24px;
    }
}

@media (max-width: 1200px) {
    .feature {
        &-num {
            font-size: 60px;
        }
    }
}

@media (max-width: 992px) {
    .feature {
        &-num {
            font-size: 48px;
        }
    }
}
</style>