<template>
  <div class="flexRow features">
    <div class="features-item" v-for="(feature,index) in features" :key="index">
      <app-feature :num="feature.num" :subtitle="feature.subtitle"></app-feature>
    </div>
  </div>
</template>

<script>
import Feature from "./Feature";
export default {
  components: {
    appFeature: Feature
  },
  data() {
    return {
      features: [
        {
          num: "40",
          subtitle: "клиентов"
        },
        {
          num: "300",
          subtitle: "выполненых проектов"
        },
        {
          num: "5",
          subtitle: "лет опыта"
        }
      ]
    };
  }
};
</script>

<style>
.features {
  align-items: flex-start;
  margin-bottom: 35px;
  &-item {
    &:not(:last-child) {
      margin-right: 114px;
    }
  }
}

@media (max-width: 992px) {
  .features {
    &-item {
      &:not(:last-child) {
        margin-right: 60px;
      }
    }
  }
}

@media (max-width: 767px) {
  .features {
    &-item {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
}

@media (max-width: 575px) {
  .features {
    flex-direction: column;
    &-item {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
