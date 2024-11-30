<template>
  <v-app>

    <div class="header">header</div>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => (
    {
    //
    })
}
</script>
<style lang="scss">
  @import url(./assets/main.scss);
  .header{
    display: flex;
    color:aliceblue;
    // background-color: black;
    height: 6vh;
  }
</style>
