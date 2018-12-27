<template>
    <div class="flexWrap works">
        <div class="works-last">
            <div class="works-item big"><app-work :img="works[0].img" :alt="works[0].alt"></app-work></div>
        </div>
        <div class="flexWrap works-section">
            <div class="works-item medium" v-for="(work, index) in works" :key="index" v-if="index >= 1">
                <app-work :img="work.img" :alt="work.alt"></app-work>
            </div>
        </div>
        <div class="flexWrap works-section">
            <template v-for="n in 4">
                <div class="works-item small" v-for="(work, index) in works" :key="index" v-if="index >= 1">
                    <app-work :img="work.img" :alt="work.alt"></app-work>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Work from './Work'
export default {
    components: {
        appWork: Work
    },
    data() {
        return {
            works: [
                {
                    img: 1,
                    alt: 'CrowdRise'
                },
                {
                    img: 2,
                    alt: 'RealEstate Asistant'
                },
                {
                    img: 3,
                    alt: 'Telemoon'
                },
                {
                    img: 4,
                    alt: 'Super Modified'
                },
                {
                    img: 5,
                    alt: 'Dopos'
                }
            ]
        }
    }
}
</script>

<style>
.works {
    width: 100%;
    &-last {
        width: 50%;
    }
    &-section {
        &:nth-child(2) {
            width: 50%;
        }
        &:last-child {
            width: 100%;
        }
    }
    &-item {
        &.big {
            width: 100%;
            height: 100%;
        }
        &.medium {
            width: 50%;
        }
        &.small {
            width: 25%;
        }
    }
}

@media (min-width: 1201px), (max-width: 992px) {
    .works {
        &-last {
            height: 592px;
        }
        &-item {
            &:not(.big) {
                height: 296px;
            }
        }
    }
}

@media (max-width: 1200px) and (min-width: 993px), (max-width: 769px) {
    .works {
        &-last {
            height: 432px;
        }
        &-item {
            &:not(.big) {
                height: 216px;
            }
        }
    }
}

@media (max-width: 992px) {
    .works {
        &-last {
            width: 100%;
        }
        &-section {
            &:nth-child(2) {
                width: 100%;
            }
        }
    }
}

@media (max-width: 992px) {
    .works {
        &-last {
            width: 100%;
        }
        &-section {
            &:nth-child(2) {
                width: 100%;
            }
        }
        &-item {
            &.small {
                width: 50%;
            }
        }
    }
}

@media (max-width: 480px) {
    .works {
        &-item {
            &.medium,
            &.small {
                width: 100%;
            }
        }
    }
}
</style>
