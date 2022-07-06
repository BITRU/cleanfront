import { acceptHMRUpdate, defineStore } from 'pinia'

// import { navigation } from '@/resources/navRoutes'
// import type { Layout } from '@/interfaces/Layout'

export const useIvsProgramsStore = defineStore({
  id: 'ivsPrograms',
  state: () => {
    return {
      headers: [
        { text: 'Название программы', value: 'name' },
        { text: 'Описание', value: 'description' },
        { text: 'Категории', value: 'category' },
      ],
      ivsPrograms: [],
    }
  },
  actions: {
    async getIvsPrograms() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()

      try {
        const { data: company, error1 } = await supabase
          .from('access_permission')
          .select('company_id')
          .eq('user_id', supabaseUser.value.id)

        if (error1)
          throw error1

        const { data: ivs_programs, error2 } = await supabase
          .from('ivs_programs')
          .select('id, name,  description, ivs_category_ids')
          .eq('company_id', company[0].company_id)

        if (error2)
          throw error

        this.ivsPrograms = ivs_programs
      }
      catch (error) {
        console.log(error)
      }

      // TODO: error check
    },
  },

  getters: {

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useIvsProgramsStore, import.meta.hot))
