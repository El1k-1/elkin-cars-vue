<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div class="card__price montaga">
      <div v-if="options?.withName" >
        {{car.name}}
      </div>
      <div>
        {{ car.price }} руб/сутки
      </div>
    </div>
    <div class="card__image">
      <img :src="require(`@/assets/img/cars/${car.image}.png`)" />
    </div>
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
  justify-content: space-between;
  .card__price {
    display: flex;
    color: #DAC19A;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    justify-content: space-around;
  }
  .card__image {
    display: flex;
    height: 90px;
    place-self: center;
    justify-content: center;

    img{
      overflow: hidden;
      width: 75%;
      object-fit: cover;
      height: auto;
    }
  }
  .card__btn {
    color: black !important;
    background-color: #d9d9d9 !important;
    align-items: center !important;
  }
}
</style>
