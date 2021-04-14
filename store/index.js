import Vuex from 'vuex'
import list from './modules/list'

const Store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      list,
    },
  })
}

export default Store
