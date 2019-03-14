<template>
    <div class="flexColumn app-views home">
        <div class="flexRow home-info">
            <p class="home-event">Акция</p>
            <p class="home-date">до 16.11.18</p>
        </div>
        <h1 class="home-title">Получи максимально эффективный результат <em>сейчас!</em></h1>
        <div class="home-controls">
            <router-link to="/about" class="home-btn">Подробнее</router-link>
        </div>
        {{param}}
    </div>
</template>
<script>
import {mixin} from '../components/mixin.js'
export default {
    mixins: [mixin]
}
</script>

<style>
.home {
    padding-top: 198px;
    background: url('../assets/img/home.jpg') no-repeat;
    &-info {
        align-items: center;
        margin-bottom: 25px;
        font-weight: 800;
        &::before {
            content: "";
            width: 35px;
            height: 2px;
            margin-right: 10px;
            background-color: var(--blackPearl-dark);
        }
    }
    &-event {
        margin-right: 8px;
    }
    &-date {
        color: var(--cerise);
    }
    &-title {
        max-width: 720px;
        margin-bottom: 38px;
        font-size: 60px;
        em {
            font-style: normal;
            color: var(--cerise);
        }
    }
    &-btn {
        max-width: 216px;
        padding: 21px 10px;
        font-size: 18px;
        text-align: center;
        color: #fff;
        background-color: var(--cerise);
        border-radius: 30px;
        box-shadow: 0 5px 24px rgba(0,0,0,.1);
        transition: box-shadow .3s ease-out;
        &:hover {
            box-shadow: 0 5px 16px rgba(0,0,0,.3);
        }
    }
}

@media (max-width: 1200px), (max-height: 767px) {
    .home {
        justify-content: center;
        padding-top: 30px;
    }
}

@media (max-width: 992px) {
    .home {
        &-title {
            font-size: 54px;
        }
    }
}

@media (max-width: 767px) {
    .home {
        &-title {
            font-size: 42px;
        }
        &-btn {
            max-width: 180px;
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }
}

@media (max-width: 575px) {
    .home {
        &-title {
            font-size: 36px;
        }
    }
}

@media (max-width: 420px) {
    .home {
        &-title {
            font-size: 32px;
        }
        &-btn {
            max-width: 160px;
            padding-top: 12px;
            padding-bottom: 12px;
            font-size: 16px;
        }
    }
}
</style>