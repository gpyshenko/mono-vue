<template>
    <button class="burger" @click="activate" :class="{active: isActive}">
        <span class="flexColumn burger-inner">
            <span class="burger-stroke" v-for="n in 2" :key="n"></span>
        </span>
    </button>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        isActive() {
            return this.$store.state.isAct
        }
    },
    methods: {
        activate() {
            this.$store.dispatch('activateMenu')
        }
    }
}
</script>

<style>
.burger {
    display: block;
    padding: 10px;
    &-inner {
        justify-content: space-between;
        align-items: flex-end;
        width: 25px;
        height: 10px;
    }
    &-stroke {
        height: 2px;
        background-color: #fff;
        &:first-child {
            width: 100%;
        }
        &:last-child {
            width: 14px;
            transition: width .1s ease-out;
        }
    }
    &.active {
        .burger {
            &-stroke {
                &:last-child {
                    width: 25px;
                }
            }
        }
    }
}
</style>
