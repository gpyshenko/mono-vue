<template>
    <div class="app-views contacts">
        <h1 class="contacts-title">Написать нам</h1>
        <form action="" class="contactsForm">
            <div class="contactsForm-item" v-for="input in inputs" :key="input.name" > 
                <app-input :tag="input.tag" :label="input.label" :type="input.type" :name="input.name" @data="getData($event,input.name)"></app-input>
            </div>
            <button class="contacts-submit" type="button">Отправить</button>
        </form>
    </div>
</template>

<script>
import Input from '../components/Input'
export default {
    components: {
        appInput: Input
    },
    data() {
        return {
            inputs: [
                {
                    tag: 'input',
                    label: 'E-mail или telegram',
                    type: 'email',
                    name: 'email'
                },
                {
                    tag: 'input',
                    label: 'Ваше имя',
                    type: 'text',
                    name: 'name'
                },
                {
                    tag: 'textarea',
                    label: 'Комментарий',
                    name: 'message'
                }
            ]
        }
    },
    methods: {
        getData(data,name) {
            console.log(data,name)
        }
    }
}
</script>

<style>
.contacts {
    &-title {
        text-transform: uppercase;
        color: #fff;
    }
}
</style>
