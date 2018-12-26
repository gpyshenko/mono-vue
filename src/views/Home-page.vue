<template>
    <div class="app-views home">
        <div class="flexRow home-info">
            <p class="home-event">Акция</p>
            <p class="home-date">до 16.11.18</p>
        </div>
        <h1 class="home-title">Получи максимально эффективный результат <em>сейчас!</em></h1>
        <div class="home-controls">
            <router-link to="/about" class="home-btn">Подробнее</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.home {
    padding-top: 198px;
    padding-bottom: 198px;
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
</style>