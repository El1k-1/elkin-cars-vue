
<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="header-logo montaga">ЁLKIN-CARS</div>
      </div>
      <div class="header-form pa-6">
        <div>
          <h2>Создать аккаунт</h2>
        </div>
        <v-text-field v-model="formData.login" outlined :color="'#FFAE00'" label="Login"></v-text-field>
        <v-text-field outlined :color="'#FFAE00'" label="Password"></v-text-field>
        <v-text-field outlined :color="'#FFAE00'" label="Email"></v-text-field>
        <v-btn text @click="registration">Register</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import useApi from '@/compositions/api'
import { reactive } from 'vue'

export default {
  name: 'LogInView',
  setup () {
    const { postQuery } = useApi()

    const formData = reactive({
      login: '',
      password: '',
      email: ''
    })
    const registration = () => {
      postQuery('users/registration', { ...formData })
    }
    return {
      registration,
      formData
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
