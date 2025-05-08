<template>
  <div class="container">
    <div>
      <h1 class="about-title montaga">Список заявок</h1>
    </div>
    <div class="container-table">
      <div v-if="!loading" class="container-table-wrapper">
        <div class="container-table-query" v-for="query in queriesList" :key="query.id">
          <div :style="{
            color: `color-mix(in oklab, var(--v-${query.type.color}-base) 80%, transparent)`
          }"
          class="container-table-query-status"
          >
            <span class="d-flex align-center">
              <v-icon class="mr-2" :style="{color: `var(--v-${query.type.color}-base) !important`}">{{ query.type.icon }}</v-icon>
              <span style="font-size: 20px;">{{ query.type.name }}</span>
            </span>
            <div>
              <v-btn :disabled="query.type.id !== 2" text color="success" @click="updateQuery(4, query.id)">Принять</v-btn>
              <v-btn :disabled="query.type.id !== 2" text color="error" @click="updateQuery(3, query.id)">Отклонить</v-btn>
            </div>
          </div>
          <div class=" d-flex">
            <div class="d-flex mr-3 direction-column">
              <span class="" style="font-size: 24px;">Заказчик: {{ query.user.login }}</span>
              <span>
                Почта: {{ query.user.email }}
              </span>
              Участник с: {{ new Date(query.user.created_at).toLocaleDateString('ru-RU', {dateStyle: 'long'}) }}
            </div>
          </div>

          <div>
            <ccard :car="query.car" :options="{withName: true, allowAction: true}"></ccard>
          </div>
        </div>
      </div>

      <div v-else class="d-flex w-100 h-100 justify-center align-center">
        <v-progress-circular
          :size="60"
          :width="2"
          color="primary"
          indeterminate
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue, { onMounted, ref } from 'vue'
import useApi from '@/compositions/api'
import ccard from '@/components/c-card.vue'
export default {
  name: 'CarsView',
  components: { ccard },
  setup (context) {
    const { getQuery, postQuery } = useApi()
    const loading = ref(false)
    const queriesList = ref([])

    const updateQuery = async (status, id) => {
      loading.value = true
      await postQuery('query/update', {
        id, status
      })
      setTimeout(async () => {
        await getItems()
      }, 100)
    }
    const getItems = async () => {
      loading.value = true
      const result = await getQuery('query/list')
      Vue.set(queriesList, 'value', result.data.data)
      loading.value = false
    }
    onMounted(async () => {
      await getItems()
    })

    return {
      queriesList,
      updateQuery,
      loading
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  display: flex;
  padding: 24px;
  width: 100%;
  align-items: center;
  flex-direction: column;

  &-table{
    display: flex;
    flex-flow: column nowrap;
    width: 70%;
    height: 700px;
    border: 1px solid aliceblue;
    padding: 12px;
    border-radius: 8px;
    overflow: auto;
    row-gap: 12px;

    &-wrapper{
      display: flex;
      flex-flow: column nowrap;
      row-gap: 8px;

    }

    &-query{
      display: flex;
      width: 100%;
      padding: 4px;
      border: 1px solid rgba(255, 255, 255, 0.219);
      border-radius: 4px;
      justify-content: space-between;
      align-items: center;

      &-status{
        display: flex;
        height: 150px;
        padding: 8px;
        flex-flow: column nowrap;
        justify-content: space-between;
      }
    }

    &::-webkit-scrollbar-corner{
      width: 8px;
      height: 8px;
      background: transparent !important;
    }
    &::-webkit-scrollbar-track{
      width: 8px !important;
      height: 8px !important;
      background-color: transparent !important;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      height: 8px;
      background: rgba(141, 140, 140, 0.562) !important;
      border-radius: 4px;
    }

  }

  .about-title{
      font-size: 36px;
      color: #DAC19A;
  }
}
</style>
