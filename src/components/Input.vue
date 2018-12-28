<template>
    <div class="formControl">
        <label :for="`${name}form`" class="formControl-label">{{label}}</label>
        <div class="formControl-input">
            <input 
                :type="type" 
                :name="name" 
                :id="`${name}form`" 
                v-if="tag === 'input'" 
                @input="change"
                :value="value">
            <textarea 
                :name="name" 
                :id="`${name}form`" 
                v-else 
                @input="change"
                :value="value">
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tag','label','type','name','value'],
    methods: {
        change(e) {
            this.$emit('data', e.target.value)
        }
    }
}
</script>

<style>
.formControl {
    &-label {
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        color: #fff;
    }
    &-input {
        position: relative;
        border-bottom: 1px solid #543b69;
        &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #745b87;
        }
    }
    input,
    textarea {
        display: block;
        width: 100%;
        height: 34px;
        background-color: transparent;
    }
    textarea {
        padding: 9px 0;
    }
}
</style>