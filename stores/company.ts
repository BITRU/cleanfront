import { acceptHMRUpdate, defineStore } from 'pinia'

// import {nuxtApp} from "#app"

import type { CompanyStore } from '~~/interfaces/Company'
// import type { Layout } from '@/interfaces/Layout'

export const useCompanyStore = defineStore({
  id: 'company',
  state: (): CompanyStore => {
    return {
      activeCompany: {},
      companys: [],
    }
  },
  actions: {
    async createUserCompany(name: string, region_id: number, ogrn: number) {
      const supabase = useSupabaseClient()
      try {
        const { data, error } = await supabase
          .from('company')
          .insert([
            { name, region_id, ogrn }],
          { returning: 'minimal' },
          )
        DebugError(error)
        if (error)
          throw error

        return data
      }
      catch (error) {
        // TODO: Оброботка ошибки
        DebugError(error)
      }
    },
    async getUserCompanys() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()

      console.log('>>>', supabaseUser.value.id)

      const { data: company, error } = await supabase
        .from('role_company')
        .select('company:company_id( id, name, ogrn)')
        .eq('user_id', supabaseUser.value.id)

      this.companys = company?.map(c => c.company)
    },
    async getCompanyById(company_id) {
      const supabase = useSupabaseClient()
      const { data: company, error } = await supabase
        .from('company')
        .select('id, name, ogrn, region(id, name)')
        .eq('id', company_id)
        .single()
      this.activeCompany = company
      // TODO: error check
    },
  },

  getters: {

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCompanyStore, import.meta.hot))
