<template>
  <div>
    <div v-if="!isShowSingle" class="about">
      <h1 class="about-title montaga">Премиум-Автомобили</h1>
      <div class="cars mt-10">
        <ccard v-for="car in cars" :key="car[0]" :car="car" @clickCar="click(car.id)">
        </ccard>
      </div>
    </div>
    <div v-else class="about">
      <div class="about-header">
        <h1 class="about-title montaga">Доставка авто</h1>
      </div>
      <div class="wrapper">
        <div>
          <v-btn @click="goBack" text class="mt-1">
            <v-icon>mdi-arrow-left</v-icon>
            Назад
          </v-btn>
          <h1 class="about-title montaga">Ваш заказ успешно сформирован</h1>
        </div>
        <div>
          <ccard :car="currentCar" :options="{allowAction: true}"></ccard>
        </div>
        <div class="about-title montaga" style="color: #DAC19A;">Забрать машину</div>
        <div class="map mb-12">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0698d13c04d22a7b50e2357c586e0c98e35b0f41cfa139cefd96122516c8ce80&amp;source=constructor" width="625" height="450" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import ccard from '@/components/c-card.vue'
import { useRouter } from 'vue-router/composables'
import useApi from '@/compositions/api'
export default {
  name: 'CarsView',
  props: {
    token: String
  },
  components: { ccard },
  setup (props, context) {
    const router = useRouter()
    const { getQuery, postQuery } = useApi()
    const cars = ref([])
    const currentCar = ref({})
    const isShowSingle = ref(false)

    const click = async (id) => {
      const result = await postQuery('query/add', { token: props.token, car_id: id })
      if (!result) return
      router.push({ path: `cars/${id}` })
      isShowSingle.value = true
      getCar()
    }
    const getCar = async () => {
      const result = await getQuery(`cars/${router.currentRoute.params.id}`)
      currentCar.value = result.data?.data
    }
    const goBack = () => {
      isShowSingle.value = false
      router.push({ name: 'cars' })
    }
    onMounted(async () => {
      const result = await getQuery('cars/list')
      cars.value = result.data.data
      if (router.currentRoute.name !== 'cars') {
        isShowSingle.value = true
        getCar()
      } else isShowSingle.value = false
    })

    return {
      cars,
      currentCar,
      click,
      getCar,
      router,
      isShowSingle,
      goBack
    }
  }
}
</script>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &-title {
    font-size: 48px;
    color: #DAC19A;

  }
  &-header {
    display: flex;
    align-items: center;
  }

  .cars {
    display: flex;
    max-width: 80%;
    gap: 8px;
    justify-self: center;
    justify-content: center;
    flex-flow: row wrap;
  }
}

.wrapper{
  display: flex;
  flex-direction: column;
  border: 1px solid aliceblue;
  width: 40%;
  justify-content: center;
  border-radius: 50px;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-title{
    font-size: 36px;
    color: aliceblue;
  }
}
.accent{
  color: #DAC19A;
}
.map{
  width: fit-content;
  border: 1px solid aliceblue;
  border-radius: 50px;
  overflow: hidden;
  align-self: center;
}
</style>
