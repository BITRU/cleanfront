<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useCompanyStore } from '@/stores/company'
const { user, error } = await auth.signIn({ email: 'ilyabitru@gmail.com', password: 'password' })

const router = useRouter()
const user = useUserStore()
const companyStore = useCompanyStore()

onMounted(async () => {
  companyStore.getUserCompanys()
})

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="flex-1 flex-grow overflow-y-auto h-full w-full py-5 px-10">
    <div class="my-8 space-y-8">
      <ClientOnly>
        <h4 class="text-lg">
          {{ user.email }}
        </h4>
      </ClientOnly>
      <div class="space-y-3">
        <ul
          class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
        >
          <li v-for="company in companyStore.companys" :key="company.id" class="col-span-1">
            <NuxtLink :to="`\company-${company.id}`">
              <div class="group relative text-left bg-panel-header-light border border-panel-border-light rounded-md py-4 px-6 flex flex-row h-32 cursor-pointer hover:border-gray-300">
                <div class="flex h-full w-full flex-col space-y-2">
                  <div class="flex w-full flex-row justify-between gap-1">
                    <h5 class="flex-shrink truncate">
                      {{ company.name }}
                    </h5>
                  </div>
                  <div class="flex w-full flex-1 flex-col">
                    <p class="text-sm" />
                    <div class="w-full" />
                  </div>
                  <div class="w-full">
                    <div class="flex items-end justify-between">
                      <span class="text-sm lowercase">ОГРН |
                        {{ company.ogrn }}</span>
                    </div>
                  </div>
                </div>
                <div class="absolute right-4 top-4 group-hover:right-3 ">
                  <div class="i-heroicons-outline-chevron-right" />
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-span-4 max-w-4xl space-y-4 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
        <div class="space-y-1">
          <p>Новая компания</p>
          <p class="text-sm">
            Создать новую компанию для отчетности.
          </p>
          <button
            class="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular rounded outline-none outline-0 text-xs px-2.5 py-2"
            @click="router.push({ path: '/new' })"
          >
            <div class="i-heroicons-solid-plus " />
            <span>Новая Компания</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
