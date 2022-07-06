import { configure, defineRule } from 'vee-validate'
import { email, length, required } from '@vee-validate/rules'

import { localize, setLocale } from '@vee-validate/i18n'
import ru from '@vee-validate/i18n/dist/locale/ru.json'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('length', length)

  // defineRule('phone', (value, field, form) => {
  //   if (!nuxtApp.$isValidPhoneNumber(value))
  //     return 'Поле должно быть действительным номером телефона'

  //   return true
  // })

  configure({
    generateMessage: localize({
      ru,
    }),
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  })

  setLocale('ru')
})
