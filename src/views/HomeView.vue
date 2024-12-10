<template>
  <div class="container">
    <div class="block rent">
      <div class="rent-title">
        <div class="rent-title-header averia">
          <p>Посуточная аренда автомобилей</p>
        </div>
        <div class="rent-title-header">
          <v-btn text @click="navigateTo('cars')" class="add-car pl-3 pr-3">
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
    <div class="block lamba">
      <div class="header">
        <hr>
        <p style="align-self: center" class="roboto">Premium segment</p>
      </div>
      <div class="lamba-content montaga">
        <div><span style="font-size: 100px;">THE</span> Lamborgini huracan</div>
        <div class="lamba-blocks">
          <div>
            <p class="averia" style="font-size: 32px;">Мощность</p>
            <p class="roboto lamba-blocks-title">999л.с</p>
          </div>
          <div>
            <p class="averia" style="font-size: 32px;">Разгон с 0 до 100км/ч</p>
            <p class="roboto lamba-blocks-title">2.3 сек</p>
          </div>
          <div>
            <p class="averia" style="font-size: 32px;">Макс. скорость</p>
            <p class="roboto lamba-blocks-title">390 км/ч</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block car-front">
      <div>
        <hr>
      </div>
    </div>
    <div class="block mercedes">
      <div class="car">
        <div>
          <div class="top mt-12">
            <p class="roboto" style="font-size: 80px; color: #DAC19A; font-weight: 800;">Mercedes Benz GLE-Class</p>
            <p style="font-size: 36px; font-weight: 600;">Mercedes-Benz S-Class Coupe ждет вас! Забудьте о повседневности и окунитесь в
              мир роскоши и комфорта.
              Забронируйте свой автомобиль прямо сейчас и насладитесь незабываемой поездкой!</p>
          </div>
        </div>
        <div class="mecedes-top">
          <div>123</div>

        </div>
      </div>
    </div>
    <div class="footer">
      <div class="header-logo montaga ml-10">ЁLKIN-CARS</div>
      <div>
        <hr>
        <div class="footer-content roboto">
          <div style="font-size: 72px; font-weight: 300;">Контакты:</div>
          <div class="pb-3">Телефон: +7 (927) 666 66 66</div>
          <div class="pb-3">
            <div class="subtext" style="height: 20px;">Для коммерческих предложений</div>
            <div>elkin.officialpr@gmail.com</div>
          </div>
        </div>
        <hr>
        <div class="footer-bottom subtext" style="font-size: 32px;">
          2024 © Все права защещены
        </div>
      </div>
    </div>
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
.container {
  display: flex;
  flex-direction: column;

  .rent {
    background-image: url(../assets/img/lamba.png);
    background-blend-mode: overlay;
    background-size: 120%;
    background-position: -250px -100px;
    background-color: rgba(0, 0, 0, 0.3);

    animation: showElement 1.5s;
    flex-direction: column;
    height: 900px;
    padding: 24px 16vh;

    &-title {
      display: flex;
      height: fit-content;
      width: 100%;
      justify-content: space-between;

      &-header {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 40%;
        font-size: 70px;

        .add-car {
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

    &-blocks {
      display: flex;
      width: 100%;
      flex-flow: row-reverse wrap-reverse;
      justify-content: space-between;
      row-gap: 32px;
      margin-top: 10%;

      .card {
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: 25vw;
        border: 1px solid aliceblue;
        border-radius: 32px;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.288);

        &-title {
          font-size: 42px;
          color: #DAC19A;
        }

        &-subtitle {
          font-size: 24px;
        }
      }
    }
  }

  .lamba {
    background-image: url(../assets/img/lamba_black.png);
    background-blend-mode: overlay;
    background-size: 90%;
    background-position: center -150px;
    background-color: rgba(0, 0, 0, 0.3);

    animation: showElementLamba 1.5s;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;

    &-content {
      padding-top: 100px;
      display: flex;
      width: 100%;
      font-size: 48px;
      justify-content: space-between;
      align-items: center;
    }

    &-blocks {
      display: flex;
      height: fit-content;
      flex-direction: row;
      width: fit-content;
      column-gap: 42px;
      justify-content: space-between;

      &-title {
        color: #DAC19A;
        font-size: 42px;
        font-weight: 800;
      }

      div {
        border: 1px solid aliceblue;
        border-radius: 30px;
        padding: 12px 24px;

      }
    }

    .header {
      display: flex;
      flex-direction: column;
      font-size: 140px !important;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  .car-front {
    background-image: url(../assets/img/car-front.png);
    background-blend-mode: overlay;
    background-size: 100%;
    background-position: center -150px;
    background-color: rgba(0, 0, 0, 0.3);

    animation: showElementLamba 1.5s;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    border-bottom: 1px solid rgb(78, 78, 78);
  }

  .mercedes {
    background-image: url(../assets/img/parking.png);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.6);

    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    border-bottom: 1px solid rgba(240, 248, 255, 0.363);

    .car {
      display: flex;
      position: relative;
      background-image: url(../assets/img/mercedes.png);
      background-size: 100%;
      backdrop-filter: blur(5px);
      background-position: -100px 50px;
      height: 90vh;
      z-index: 3;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .top {
        display: flex;
        width: 60vw;
        border: 1px solid aliceblue;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.274);
        backdrop-filter: blur(5px);
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

    }
  }

  .footer {
    padding-top: 48px;
    padding-bottom: 12px;

    &-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 42px;
      font-weight: 300;
      align-items: end;
      padding: 4px 42px;

    }

    &-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 48px;
      padding-top: 52px;
    }

    .header {
      display: flex;
      color: aliceblue;
      background-color: black;
      height: 12vh;
      padding: 0 16px;
      padding-top: 24px;
      flex-direction: column;

      &-logo {
        font-size: 64px;
        color: #DAC19A;
      }
    }
  }

  .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 16vh;
  }

  .subtext {
    color: rgb(70, 70, 70);
    font-size: 24px;
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

@keyframes showElementLamba {
  from {
    background-color: rgb(0, 0, 0);
    background-position: center 100px;
  }

  to {
    background-color: rgba(0, 0, 0, 0.3);
    background-position: center -150px;
  }

}
</style>
