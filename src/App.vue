<template>
  <v-app>

    <div class="header" v-if="isAuthorized">
      <div class="header-row">
        <div class="header-logo montaga">ЁLKIN-CARS</div>
        <div class="header-row-panel">
          <v-btn
          text
          @click="navigateTo(button.route)"
          v-for="button in navButtonsProxy"
          :key="button.name"
          :class="router.currentRoute.name === button.route ? 'header-row-panel-visited' : ''">
          {{ button.name }}
          </v-btn>
        </div>
        <div class="header-row-icons">
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn icon color="primary" v-on="on">
                <v-icon size="32" :title="'Вы под учетной записью администратора'" :color=" permissionId === 2 ? 'info' : ''">mdi-account</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <div>elkin</div>
              </v-list-item>
              <v-list-item>
                <v-btn text color="error">
                  <div @click="exitAccount">Выход</div>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="header-line">
        <lineSVG></lineSVG>
      </div>
    </div>

    <v-main>
      <router-view :authStatus="isAuthorized" :token="token" />
    </v-main>
  </v-app>
</template>

<script>
import { useRoute, useRouter } from 'vue-router/composables'
import lineSVG from './components/line.vue'
import { computed, onMounted, ref, watch } from 'vue'
import useApi from './compositions/api'
import useUser from './compositions/useUser'
export default {
  name: 'App',
  components: {
    lineSVG
  },

  setup (props) {
    const navButtons = [
      {
        name: 'Главная',
        route: 'main'
      },
      {
        name: 'Заявки',
        route: 'queries',
        onlyAdmin: true
      },
      {
        name: 'Авто',
        route: 'cars'
      },
      {
        name: 'Сервис',
        route: 'service'
      },
      {
        name: 'Контакты',
        route: 'contacts'
      }
    ]
    const navButtonsProxy = computed(() => {
      return navButtons.reduce((acc, el) => {
        if (el.onlyAdmin && permissionId.value !== 2) return acc
        acc.push(el)
        return acc
      }, [])
    })
    const accountItems = [
      { title: 'Привет' },
      { title: 'Выход' }
    ]
    const router = useRouter()
    const route = useRoute()
    const { checkMe } = useApi()
    const token = ref('')
    const permissionId = ref(0)
    const isAuthorized = ref(true)
    const navigateTo = (route) => {
      if (router.currentRoute.name !== route) { router.push({ name: route }) }
    }

    const exitAccount = async () => {
      await localStorage.clear()
      navigateTo('login')
    }
    const checkUserToken = async () => {
      token.value = await localStorage.getItem('token')
      if (token.value) {
        const result = await checkMe({ token: token.value })
        const { user } = useUser()
        permissionId.value = user.permission_id
        if (result) {
          isAuthorized.value = true
        } else {
          isAuthorized.value = false
          navigateTo('login')
        }
      } else {
        isAuthorized.value = false
        navigateTo('login')
      }
    }
    onMounted(() => {
      checkUserToken()
      watch(
        () => route,
        () => { checkUserToken() },
        { deep: true }
      )
    })

    return {
      isAuthorized,
      navButtons,
      navigateTo,
      accountItems,
      router,
      token,
      exitAccount,
      permissionId,
      navButtonsProxy
    }
  }
}
</script>
<style scoped lang="scss">
@import url(./assets/main.scss);

.header {
  display: flex;
  color: aliceblue;
  background-color: black;
  height: 12vh;
  padding: 0 16px;
  padding-top: 24px;
  flex-direction: column;

  &-logo {
    margin-left: 3vw;
    font-size: 48px;
    color: #DAC19A;
  }

  &-line {
    position: absolute;
    width: 100%;
    top: 7vh
  }

  &-row {
    display: flex;
    flex-direction: row;
    column-gap: 10%;
    justify-content: space-between;

    &-panel {
      display: flex;
      flex-direction: row;
      height: fit-content;
      column-gap: 8vw;
      // background-color: aliceblue;

      &-visited{
        color: #FFAE00 !important;
      }
    }
  }
}
</style>
