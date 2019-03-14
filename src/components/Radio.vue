<template>
    <label class="radio">
        <input type="radio" :value="props.value" :name="props.name" v-model="change" class="radio__input">
        <span class="radio__btn"></span>
        <span class="radio__title">{{props.title}}</span>
    </label>
</template>

<script>
    export default {
        name: "Radio",
        props: {
            props: Object,
            model: String
        },
        computed: {
            change: {
                get() {
                    return this.model
                },
                set() {
                    console.log(this.props.value)
                    this.$emit("change", this.props.value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
