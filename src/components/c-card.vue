<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div class="card__price montaga">{{ car.price }} руб/сутки</div>
    <img class="card__image" :src="car.image" />
    <v-btn v-if="!options?.allowAction" dark text @click="click()">Забронировать</v-btn>
  </div>
</template>
<script>
export default {
  name: 'c-card',
  props: {
    car: Object,
    options: Object
  },
  setup (_, context) {
    const click = (event) => {
      context.emit('clickCar', event)
    }
    return { click }
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  align-items: center;
  background-color: rgba(228, 228, 228, 0.2);
  padding: 10px;
  border-radius: 8px;
  column-gap: 8px;
  row-gap: 4px;
  .card__price {
    color: #DAC19A;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
  }
  .card__image {
    width: 70%;
    place-self: center;
  }
  .card__btn {
    color: black !important;
    background-color: #d9d9d9 !important;
    align-items: center !important;
  }
}
</style>
