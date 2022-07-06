import { acceptHMRUpdate, defineStore } from 'pinia'


// import {nuxtApp} from "#app"


// import { navigation } from '@/resources/navRoutes'
// import type { Layout } from '@/interfaces/Layout'

export const useAgentStore = defineStore({
  id: 'agent',
  state: () => {
    return {
      addEditAgent: { id: null, company_name: "", ogrn: null, region: {id: 11, name: 'г. Москва'} },
       headers : [
        // { text: 'Название компании', value: 'company_name' },
        // { text: 'ОГРН', value: 'ogrn' },
        // { text: 'Субъект РФ', value: 'region' },
        { headerName: "Название компании", field: "company_name",  sortable: true, filter: true },
        { headerName: "Субъект РФ", field: "region", sortable: true, filter: false },
        { headerName: "ОГРН", field: "ogrn",  sortable: true, filter: true, width: 100,
       },
        {headerName: "", field: "id", cellRenderer: "AgGridDelete", cellRendererParams: {action: "edit"} , sortable: false, filter: false, width: 90,
        minWidth: 50, maxWidth: 150 },
        {headerName: "", field: "id", cellRenderer: "AgGridDelete", cellRendererParams: {action: "delete"} , sortable: false, filter: false, width: 90,
        minWidth: 50, maxWidth: 150 },

      ],
      regions: [],
      agentsList: [],

    }
  },
  actions: {
    async getListOfRegions () {
      const supabase = useSupabaseClient()
      const { data: regions, error } = await supabase.from('regions').select('id, name')
      this.regions = regions
      //TODO: error check
    },

    async getListOfAgents  () {
      const supabase = useSupabaseClient()
      try {
        const { data, error } = await supabase
          .from('agents')
          .select('id, company_name, ogrn, regions(id, name)')
        if (error)
          throw error
      
          this.agentsList = data
        // agents.value = data.map((a) => { return {id:a.id, company_name: a.company_name, ogrn: a.ogrn, region: a.regions.name, region_id: a.regions.id } })
      }
      catch (error) {
      //TODO: error check
        console.log(error)
      }
    },

    async addAgent () {
      const supabase = useSupabaseClient()
        if (this.addEditAgent.company_name && this.addEditAgent.ogrn && this.addEditAgent.region) {
          try{
            const { data, error } = await supabase
              .from('agents')
              .insert([{ company_name: this.addEditAgent.company_name, ogrn: this.addEditAgent.ogrn, region_id: this.addEditAgent.region.id }
                ])
        if(error) throw error 
        DebugSupabase(data)
        
        this.addEditAgent = { company_name: "", ogrn: null, region: {id: 11, name: 'г. Москва'} }
        
        return data.length
      }
      catch(error) {
        //TODO если компания существует либо иная
        console.log(error)
        }
      }
    },

    async editAgent(){
      const supabase = useSupabaseClient()
        if (this.addEditAgent.company_name && this.addEditAgent.ogrn && this.addEditAgent.region && this.addEditAgent.id) {
      try {
      const { data, error } = await supabase
        .from('agents')
        .update({ company_name: this.addEditAgent.company_name, ogrn: this.addEditAgent.ogrn, region_id: this.addEditAgent.region.id })
        .match({id: this.addEditAgent.id})

        if(error) throw error

        return data.length

      } catch(error){
        console.log(error)
      }
        

      //TODO: error check
    } },

    async deleteAgent(agent_Id){
      const supabase = useSupabaseClient()
      try {
        const { data, error } = await supabase
        .from('agents')
        .delete()
        .match({id: agent_Id})
      
        if (error) throw error
      
        } catch(error){
      // TODO error check
          console.log(error)
        }
      }
  },

  getters: {
    getAgentsList: (state) => state.agentsList.map((agent) => { 
      return { id:agent.id, company_name: agent.company_name, ogrn: agent.ogrn, region: agent.regions.name, region_id: agent.regions.id } 
    }),

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAgentStore, import.meta.hot))
