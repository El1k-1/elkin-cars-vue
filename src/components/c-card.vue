<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div class="card__price">{{ price }} руб/сутки</div>
    <img max-height="75px" class="card__image" :src="image" />
    <v-btn dark text @click="click()">Забронировать</v-btn>
  </div>
</template>
<script>
export default {
  name: 'c-card',
  props: {
    id: Number,
    price: Number,
    image: String
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
  width: 340px;
  height: auto;
  align-items: center;
  background-color: rgba(228, 228, 228, 0.2);
  padding: 10px;
  border-radius: 8px;
  column-gap: 8px;
  row-gap: 4px;
  .card__price {

    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
  }
  .card__image {
    max-height: 75px !important;
    max-width: 210px;
    place-self: center;
  }
  .card__btn {
    color: black !important;
    background-color: #d9d9d9 !important;
    align-items: center !important;
  }
}
</style>
