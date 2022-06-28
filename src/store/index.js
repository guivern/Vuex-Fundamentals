import { createStore } from 'vuex'
import user from './modules/user'
import event from './modules/event'

export default createStore({
  state: {},
  mutations: {},
  modules: {
    user,
    event
  },
  getters: {
    // this section is like computer, here you can do filters or calculate before return states
  }
})
