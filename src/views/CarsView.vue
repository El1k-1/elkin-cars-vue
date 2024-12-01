<template>
  <div class="about">
    <h1 class="title">Премиум-Автомобили</h1>
    <div class="cars">
      <ccard
        v-for="car in cars"
        :key="car[0]"
        :price="car.price"
        :image="car.img"
        @clickCar="click(car.id)"
      >
      </ccard>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import ccard from '@/components/c-card.vue'
export default {
  name: 'CarsView',
  components: { ccard },
  setup (context) {
    const cars = ref([
      { id: 1, price: 1999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 2, price: 2999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 3, price: 1999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 4, price: 1999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 5, price: 2999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 6, price: 3999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 7, price: 1999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 8, price: 2999, img: 'https://i.imgur.com/uwF71rp.png' },
      { id: 9, price: 3999, img: 'https://i.imgur.com/uwF71rp.png' }
    ])

    const click = (id) => {
      console.log(id)
    }

    return { cars, click }
  }
}
</script>
<style lang="scss">
.cars {
  display: flex;
  max-width: 1200px;
  gap: 8px;
  justify-self: center;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
