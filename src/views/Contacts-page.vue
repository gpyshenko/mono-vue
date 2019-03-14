<template>
    <div class="flexRow app-views contacts">
        <div class="contacts-inner">
            <h1 class="contacts-title">Написать нам</h1>
            <form action="" class="contactsForm">
                <div class="contactsForm-item" v-for="input in inputs" :key="input.name"> 
                    <app-input :tag="input.tag" :label="input.label" :type="input.type" :name="input.name" @data="getData($event,input)"/>
                </div>
                <button class="contactsForm-btn" type="button" @click="sendData">Отправить</button>
                <app-radio v-for="(radio,index) in radios.inputs"
                           :key="index"
                           :props="radio"
                           :model="radios.radioModel"
                           v-model="radios.radioModel"
                />
                {{radios.radioModel}}
            </form>
        </div>
    </div>
</template>

<script>
    import {data} from '../data/radios';
import Input from '../components/Input'
import Radio from '../components/Radio'
export default {
    components: {
        appInput: Input,
        appRadio: Radio
    },
    data() {
        return {
            radios: data,
            inputs: [
                {
                    tag: 'input',
                    label: 'E-mail или telegram',
                    type: 'email',
                    name: 'email',
                    model: ''
                },
                {
                    tag: 'input',
                    label: 'Ваше имя',
                    type: 'text',
                    name: 'name',
                    model: ''
                },
                {
                    tag: 'textarea',
                    label: 'Комментарий',
                    name: 'message',
                    model: ''
                }
            ]
        }
    },
    methods: {
        getData(data,input) {
            input.model = data
        },
        sendData() {
            let rows = this.inputs;
            let data = rows.map((input) => ({name : input.model}))
            console.log(data)
        },
        change(e) {
            this.radios.radioModel = e
        }
    },
    mounted() {
    }
}
</script>

<style>
.contacts {
    padding-top: 146px;
    background: url('../assets/img/contacts.jpg') no-repeat;
    background-size: cover;
    &-inner {
        width: 100%;
        max-width: 484px;
    }
    &-title {
        margin-bottom: 65px;
        font-size: 36px;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
    }
    &Form {
        display: block;
        &-item {
            &:not(:last-of-type) {
                margin-bottom: 50px;
            }
            &:last-of-type {
                margin-bottom: 40px;
            }
        }
        &-btn {
            display: block;
            width: 100%;
            max-width: 216px;
            padding: 21px 10px;
            font-size: 18px;
            text-align: center;
            color: var(--mainColor);
            background-color: #fcec95;
            border-radius: 30px;
            box-shadow: 0 5px 24px rgba(0,0,0,.1);
            transition: box-shadow .3s ease-out;
            &:hover {
                box-shadow: 0 5px 16px rgba(0,0,0,.3);
            }
        }
    }
}

@media (max-width: 992px), (max-heigth: 767px) {
    .contacts {
        align-items: center;
        padding-top: 30px;
    }
}

@media (max-width: 767px) {
    .contacts {
        &Form {
            &-btn {
                max-width: 180px;
                padding-top: 16px;
                padding-bottom: 16px;
            }
        }
    }
}

@media (max-width: 420px) {
    .contacts {
        &Form {
            &-btn {
                max-width: 160px;
                padding-top: 12px;
                padding-bottom: 12px;
                font-size: 16px;
            }
        }
    }
}
</style>
