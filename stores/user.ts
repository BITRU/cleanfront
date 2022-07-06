import { acceptHMRUpdate, defineStore } from 'pinia'
import type { UserStore } from '@/interfaces/user'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStore => {
    return {
      email: '',
      isLogedIn: false,
      avatar: '',
    }
  },
  actions: {},
  getters: {},
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
