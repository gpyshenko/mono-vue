<template>
    <div class="formControl">
        <label :for="`${name}form`" class="formControl-label">{{label}}</label>
        <div class="formControl-input">
            <input :type="type" :name="name" :id="`${name}form`" v-if="tag === 'input'" @keyup="change">
            <textarea :name="name" :id="`${name}form`" v-else @keyup="change"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tag','label','type','name'],
    methods: {
        change(e) {
            // console.log('asd', e.target.value)
            this.$emit('data', e.target.value)
        }
    }
}
</script>
