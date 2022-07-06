<script setup lang="ts">
import { useCompanyStore } from '@/stores/company'
const companyStore = useCompanyStore()
const route = useRoute()

definePageMeta({
  colorMode: 'light',

})

onMounted(async () => {
  // DebugApi(route.params)
  companyStore.getCompanyById(route.params.company_id)
})

// import { useCompanyStore } from '@/stores/company'

// const router = useRouter();
// const companyStore = useCompanyStore()
</script>

<template>
  <!-- <div>
    <p>SHOW COMPANY INDEX</p>
    <p>{{ $route.params.company_id }} - {{ $route.params.id }}</p>
    <p>{{ companyStore.activeCompany.name }}</p>
  </div> -->
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full mx-auto xl:px-8 lg:flex h-full">
    <div class="bg-gray-50 pl-4 sm:pl-6 lg:pl-8 lg:flex-shrink-0 lg:border-r lg:border-gray-200 xl:pl-0">
      <div class="h-full pr-6 py-6 lg:w-80">
        <!-- Start right column area -->
        <div class="h-full relative" style="min-height: 16rem">
          <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg">
            <div class="blur-none">
              <p>somedata</p>
              <p>{{ companyStore.activeCompany }}</p>
            </div>
          </div>
        </div>
        <!-- End right column area -->
      </div>
    </div>
    <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-86 xl:border-r xl:border-gray-200 bg-white">
      <div class="h-full pr-4 pl-6 py-6 sm:pr-6 lg:pr-6 xl:pr-6">
        <!-- Start left column area -->
        <div class="h-full relative" style="min-height: 12rem">
          <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
        </div>
        <!-- End left column area -->
      </div>
    </div>
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-white xl:flex">
      <div class="bg-white lg:min-w-0 lg:flex-1">
        <div class="h-full py-6 px-4 sm:pl-6 lg:pl-6 sm:pr-0 lg:pr-0">
          <!-- Start main area -->
          <div class="relative h-full" style="min-height: 36rem">
            <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
          </div>
          <!-- End main area -->
        </div>
      </div>
    </div>
  </div>
</template>
