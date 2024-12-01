
<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="header-logo montaga">ЁLKIN-CARS</div>
      </div>
      <div class="header-form pa-6">
        <div class="header-form-top">
          <h2>{{loginOrRegistr ? 'Вход' : 'Создать аккаунт'}}</h2>
          <v-btn @click="() => {loginOrRegistr = !loginOrRegistr}" text>{{loginOrRegistr ? 'Зарегистрироваться' : 'Войти'}}</v-btn>
        </div>
        <v-text-field v-model="formData.login" type="login" outlined :color="'#FFAE00'" label="Login"></v-text-field>
        <v-text-field v-model="formData.password" type="password" outlined :color="'#FFAE00'" label="Password"></v-text-field>
        <v-text-field v-model="formData.email" v-if="!loginOrRegistr" outlined :color="'#FFAE00'" label="Email"></v-text-field>
        <v-btn text @click="registration">{{loginOrRegistr ? 'Вход' : 'Создать аккаунт'}}</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import useApi from '@/compositions/api'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router/composables'

export default {
  name: 'LogInView',
  prop: {
    authStatus: Boolean
  },
  setup (props) {
    const { postQuery } = useApi()

    const formData = reactive({
      login: '',
      password: '',
      email: ''
    })
    const router = useRouter()
    const loginOrRegistr = ref(true)
    const errorMessage = ref('')
    const registration = async () => {
      if (!loginOrRegistr.value) {
        const { data } = await postQuery('users/registration', { ...formData })
        if (data.data.token) {
          await localStorage.setItem('token', data.data.token)
          router.push({ name: 'main' })
        } else {
          errorMessage.value = 'Ошибка'
        }
      } else {
        const { data } = await postQuery('users/auth', { ...formData })
        // eslint-disable-next-line no-debugger
        console.log(data.data.token)
        if (data.data.token) {
          await localStorage.setItem('token', data.data.token)
          router.push({ name: 'main' })
        } else {
          errorMessage.value = 'Ошибка'
        }
      }
      onMounted(() => {
        console.log(props.authStatus)
        if (props.authStatus) {
          router.push({ name: 'main' })
        }
      })
    }
    return {
      registration,
      formData,
      loginOrRegistr,
      errorMessage
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/img/litvin.png);
    background-size: 100%;
    background-position: center;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.7);
    animation: showElement 10s;

    .wrapper{
      display: flex;
      height: 80vh;
      flex-direction: column;
      justify-content: space-between;

    }

    .header{
      display: flex;
      border: 1px solid aliceblue;
      border-radius: 30px;

      &-logo{
        font-size: 60px;
        padding: 0 16px;
      }
      &-form{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        border: 1px solid aliceblue;
        border-radius: 30px;

        &-top{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .input-wrapper{
          display: flex;
          width: 100%;
          flex-direction: column;
          .input-wrapper-block {
            display: flex;
            border: 1px solid rgba(240, 248, 255, 0.39);
            height: 42px;
            border-radius: 12px;
            padding-left: 8px;
            align-items: center;

          }
          .input {
            width: 100%;
            font-size: 18px;
            &:focus-visible{
              transition: 0.5s ease;
              border: none;
              outline: none;
            }
            &::after{
              border-bottom: 1px solid aliceblue;
            }
          }
        }
      }
    }
  }
  @keyframes showElement {
    from {
      background-size: 110%;
      background-color: rgb(0, 0, 0);
    }
    to {
      background-size: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

  }
</style>
