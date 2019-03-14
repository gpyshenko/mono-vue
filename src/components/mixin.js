export const mixin = {
    computed: {
        param() {
            return `sss ${this.$route.path}`
        }
    }
}