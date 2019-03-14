<template>
    <label class="radio">
        <input type="radio" :value="props.value" :name="props.name" :checked="props.value === model" @input="asd" class="radio__input">
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
        // computed: {
        //     asd: {
        //         get() {
        //             return this.model
        //         },
        //         set() {
        //             console.log(this.props.value)
        //             this.$emit("change", this.props.value)
        //         }
        //     }
        // },
        methods: {
            asd(e) {
                console.log(this.props.value)
                this.$emit("input", this.props.value)
            }
        }
    }
</script>

<style scoped>

</style>
