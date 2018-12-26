<template>
    <div class="app-views about">
        <h1 class="about-title"><strong>
            Команда web разработчиков</strong> 
            <br>
            с большим опытом 
            <br> работы
        </h1>
        <app-features></app-features>
        <div class="about-dscr">
            <p>Компания работает на рынке с 2018 года, начиная с аутсорсинга дизайна UI и UX и ежегодно увеличивая разнообразие услуг. Теперь Mono представляет собой полнофункциональное цифровое агентство со всеми специалистами, необходимыми для эффективного творческого процесса с нуля.</p>
            <p>Агентские отделы организованы на разных этапах удобной разработки продукта. Твердое управление проектами, основанное на лучших мировых практиках, позволяет нам запускать сложные проекты для клиентов по всему миру и обеспечивать качественный результат.</p>
        </div>
    </div>
</template>
<script>
import Features from '../components/Features'
export default {
    components: {
        appFeatures: Features
    }
}
</script>

<style>
.about {
    padding-top: 108px;
    background: url('../assets/img/about.jpg') no-repeat;
    background-size: cover;
    &-title {
        margin-bottom: 130px;
        font-size: 72px;
        font-weight: 900;
        line-height: 90px;
        text-transform: uppercase;
        color: #fff;
        strong {
            color: var(--cerise);
        }
    }
    &-dscr {
        max-width: 1160px;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: #fff;
        p {
            margin-bottom: 24px;
        }
    }
}

@media (max-width: 1200px) {
    .about {
        padding-top: 60px;
        &-title {
            margin-bottom: 60px;
            font-size: 60px;
        }
    }
}

@media (max-width: 992px) {
    .about {
        &-title {
            font-size: 48px;
        }
    }
}

@media (max-width: 767px) {
    .about {
        padding-top: 30px;
        &-title {
            font-size: 42px;
        }
    }
}
</style>
