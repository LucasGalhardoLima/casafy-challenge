<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    loading: false,
    search: '',
  }),
  computed: {
    ...mapGetters(['getItems']),
  },
  watch: {
    async search(after, before) {
      this.loading = true
      const resp = await this.listItems(this.search)
      if (resp) this.loading = false
    },
  },
  async mounted() {
    this.loading = true
    const resp = await this.listItems()
    if (resp) this.loading = false
  },
  methods: {
    ...mapActions(['listItems']),
  },
}
</script>

<template>
  <div>
    <Toolbar />
    <div class="home-container bg-current p-4">
      <Header />
      <div class="container mx-auto">
        <Input class="my-4" :search.sync="search" />
        <div
          v-if="!loading"
          class="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4"
        >
          <Card v-for="(item, index) in getItems" :key="index" :item="item" />
        </div>
        <Loading v-else />
      </div>
    </div>
  </div>
</template>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
