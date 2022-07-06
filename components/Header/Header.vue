<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useLayoutStore } from '@/stores/layout'
import { useUserStore } from '@/stores/user'

const layout = useLayoutStore()
const user = useUserStore()

const userNavigation = [
  // { name: 'Профиль', href: '/profile' },
  // { name: 'Settings', href: '#' },
  { name: 'Выйти', href: '/signout' },
]
</script>

<template>
  <nav class="bg-gray-200 border-b border-gray-600">
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-row justify-between h-16">
        <div class="flex flex-none w-14 sm:items-center">
          <button
            type="button"
            class=" bg-gray-100 h-12 w-12 p-2 inline-flex items-center justify-center rounded-md border-1 border-gray-400 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
            @click="layout.sidebarShow = !layout.sidebarShow"
          >
            <div class="h-6 w-6 " :class="[layout.sidebarShow ? 'i-carbon-close' : 'i-carbon-menu']" aria-hidden="false" />
          </button>
        </div>
        <div class="flex flex-1 max-w-full sm:items-center content-start ml-5">
          <span class="text-lg text-red-600 font-extrabold">Инвестпрограмма</span>
          <span class="text-lg text-stone-900 font-semibold" />
        </div>
        <div class="flex sm:ml-6 sm:items-center">
          <!-- <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <div class="i-heroicons-outline-bell h-6 w-6" aria-hidden="true" />
          </button> -->

          <!-- Profile dropdown -->
          <ClientOnly>
            <HeaderAvatar />
          </ClientOnly>
        </div>
      </div>
    </div>
  </nav>
</template>
