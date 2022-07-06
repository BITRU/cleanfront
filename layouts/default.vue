<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="w-full">
      <!-- <Header /> -->
    </div>
    <div class="flex flex-row h-full">
      <!-- <Sidebar /> -->
      <div class="flex-auto flex flex-col">
        <div class="h-fill">
          <HeaderBreadcrumb />
        </div>

        <main class="h-full">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

