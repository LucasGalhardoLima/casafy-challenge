<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getItems']),
  },
  async mounted() {
    await this.listItems()
  },
  methods: {
    ...mapActions(['listItems']),
  },
}
</script>

<template>
  <div class="home-container bg-current p-4">
    <Header />

    <div class="container mx-auto">
      <Input class="my-4" />
      <div
        class="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4"
      >
        <Card v-for="(item, index) in getItems" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
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
