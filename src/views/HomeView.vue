<template>
  <div class="container">
    <div class="block rent">
      <div class="rent-title">
        <div class="rent-title-header averia">
          <p>Посуточная аренда автомобилей</p>
        </div>
        <div class="rent-title-header">
          <v-btn @click="navigateTo('cars')" class="add-car pl-3 pr-3">
              <v-icon size=40>mdi-plus</v-icon>
            <div class="ml-6">
              Выбрать машину
            </div>
          </v-btn>
        </div>
      </div>
      <div class="rent-blocks">
        <div class="card pa-4" v-for="card in cards" :key="card.title">
          <div class="card-title averia">{{ card.title }}</div>
          <div class="card-subtitle">{{ card.subtitle }}</div>
        </div>
      </div>
    </div>
    <div class="block">2</div>
    <div class="block">3</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router/composables'

export default {
  name: 'HomeView',

  setup () {
    const router = useRouter()
    const cards = [
      {
        title: '5000+',
        subtitle: 'довольных клиентов'
      },
      {
        title: '120+',
        subtitle: 'автомобилей в каталоге'
      },
      {
        title: '3 города',
        subtitle: 'мы есть в Москве, Самаре, Питере'
      },
      {
        title: '10+ лет',
        subtitle: 'слаженной работы'
      }
    ]
    const navigateTo = (route) => {
      if (router.currentRoute.name !== route) { router.push({ name: route }) }
    }
    return {
      cards,
      navigateTo
    }
  }
}
</script>
<style scoped lang="scss">
  .container{
    display: flex;
    flex-direction: column;

    .rent{
      background-image: url(../assets/img/lamba.png);
      background-blend-mode: overlay;
      background-size: 120%;
      background-position: -250px -100px;
      background-color: rgba(0, 0, 0, 0.3);

      animation: showElement 1.5s;
      flex-direction: column;
      height: 900px;
      padding: 24px 16vh;

      &-title{
        display: flex;
        height: fit-content;
        width: 100%;
        justify-content: space-between;

        &-header{
          display: flex;
          align-items: center;
          justify-content: end;
          width: 40%;
          font-size: 70px;

          .add-car{
            display: flex;
            height: 80px;
            width: 25vw;
            border: 1px solid aliceblue;
            border-radius: 50px;
            font-size: 32px;
            align-items: center;
          }
        }
      }
      &-blocks{
        display: flex;
        width: 100%;
        flex-flow: row-reverse wrap-reverse;
        justify-content: space-between;
        row-gap: 32px;
        margin-top: 10%;

        .card{
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: 25vw;
          border: 1px solid aliceblue;
          border-radius: 32px;
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.288);

          &-title{
            font-size: 42px;
            color: #DAC19A;
          }
          &-subtitle{
            font-size: 24px;
          }
        }
      }
    }
    .block{
      display: flex;
      width: 100%;
    }
  }

  @keyframes showElement {
        from {
          background-color: rgb(0, 0, 0);
          background-position: -250px 100px;
        }
        to {
          background-color: rgba(0, 0, 0, 0.3);
          background-position: -250px -100px;
        }

      }
</style>
