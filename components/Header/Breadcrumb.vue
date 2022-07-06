<script setup lang="ts">
// import { useCompanyStore } from '@/stores/company'
// const companyStore = useCompanyStore()
const route = useRoute()
const pages = ref([{ name: 'Компании', href: '/', current: false },
  // { name: companyStore.activeCompany.name, href: '', current: true }
])

// const breadcrumb = (currentPath) => {
//   switch (currentPath) {
//     case 'index': // if (x === 'value1')
//       pages.value = []
//       break
//     case 'new': // if (x === 'value1')
//       pages.value = [
//         { name: 'Новая компания', href: '#', current: true },
//       ]
//       break
//     case 'company-company_id': // if (x === 'value1')
//       pages.value = [
//         { name: 'Компании', href: '/test', current: false },
//         { name: companyStore.activeCompany.name, href: '', current: true },
//       ]
//       break

//     default:
//       pages.value = []
//       break
//   }
// }

// onMounted(() => {
//   breadcrumb(route.name)
//   DebugApp('route:', route.name)
// })

// watch(route, (newRoute, prevRoute) => {
//   DebugApp('NEwroute:', route.name)

//   breadcrumb(newRoute.name)
// })

// watch(companyStore, () => {
//   breadcrumb(route.name)
// })
</script>

<template>
  <div class="flex w-full max-h-12 overflow-hidden  items-center justify-between py-2 px-5 border-b border-gray-400">
    <div class="flex flex-1 flex-col" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-600">
              <div class="i-heroicons-outline-home flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </NuxtLink>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <div
              class="i-mdi-slash-forward flex-shrink-0 h-6 w-6 text-gray-300"
            />
            <NuxtLink
              :to="page.href"
              class="ml-4 text-sm font-medium  hover:text-gray-600"
              :aria-current="page.current ? 'page' : undefined"
              :class="[page.current ? 'text-gray-600' : 'text-gray-500']"
            >
              {{ page.name }}
            </NuxtLink>
          </div>
        </li>
      </ol>
    </div>
    <!-- <div class="hidden md:flex items-center space-x-2 ">
      <button
        type="button" aria-haspopup="dialog" aria-expanded="false"
        aria-controls="radix-5" data-state="closed"
        class=" flex border-none rounded bg-transparent p-0 outline-none outline-offset-1 transition-all focus:outline-4 focus:outline-scale-600 "
      >
        <span
          class=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1"
        >
          <div class="i-mdi-help-circle-outline h-4 w-4" />

          <span class="truncate">Помошь</span></span>
      </button><button
        type="button"
        aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-6" data-state="closed"
        class=" flex border-none rounded bg-transparent p-0 outline-none outline-offset-1 transition-all focus:outline-4 focus:outline-scale-600 "
      >
        <span
          class=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="sbui-icon text-scale-900"
        >
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          />
        </svg><span class="truncate"><span class="block md:hidden">Feedback</span><span
          class="hidden md:block"
        >Отзывы по странице?</span></span></span>
      </button><button
        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-7" data-state="closed"
        class=" flex border-none rounded bg-transparent p-0 outline-none outline-offset-1 transition-all focus:outline-4 focus:outline-scale-600 "
      >
        <div class="relative flex">
          <span
            id="notification-button"
            class=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            class="sbui-icon text-scale-1200"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg></span>
        </div>
      </button>
    </div> -->
  </div>
</template>
