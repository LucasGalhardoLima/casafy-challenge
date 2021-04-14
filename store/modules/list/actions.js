export default {
  async listItems({ commit }) {
    try {
      const resp = await this.$axios.get('people/')
      commit('set_items', resp.data.results)
    } catch (e) {
      return {
        message: 'Unable to list items',
      }
    }
  },
}
