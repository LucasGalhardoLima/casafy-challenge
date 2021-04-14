export default {
  async listItems({ commit }, query) {
    try {
      const resp = await this.$axios.get(
        `people/${query ? `?search=${query}` : ''}`
      )
      commit('set_items', resp.data.results)
      return resp.data.results
    } catch (e) {
      return {
        message: 'Unable to list items',
      }
    }
  },
}
