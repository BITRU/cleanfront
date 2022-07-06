import { ErrorMessage, Field, Form } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VVForm', Form)
  nuxtApp.vueApp.component('VVField', Field)
  nuxtApp.vueApp.component('VVErrorMessage', ErrorMessage)
})
