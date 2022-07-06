import { acceptHMRUpdate, defineStore } from 'pinia'

import { navigation } from '@/resources/navRoutes'
import type { Layout } from '@/interfaces/Layout'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: (): Layout => {
    return {
      sidebarShow: true,
      sidebarFull: false,
      navigation,
    }
  },
  actions: {},
  getters: {},
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
