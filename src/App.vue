<script lang="ts" setup>
import AppHome from './page/AppHome.vue'
</script>

<!-- layout -->
<template>
  <main class="flex h-screen w-full justify-center bg-gray-50 font-main text-gray-500">
    <div class="mx-3 flex h-full w-full flex-col sm:w-11/12 md:w-9/12">
      <!-- Header -->
      <header class="my-4 flex items-center justify-between">
        <img class="h-auto w-9 rounded" src="/logo.png" alt="Logo" />

        <div>
          <a
            class="flex justify-center rounded bg-gray-200 px-4 pt-1.5 pb-1 text-sm font-semibold hover:bg-gray-300"
            href="https://github.com/kensoz"
          >
            <span>
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              GitHub
            </span>
          </a>
        </div>
      </header>

      <!-- main contents -->
      <main class="mb-5 flex flex-grow items-center justify-center">
        <AppHome />
      </main>

      <!-- Footer -->
      <footer class="my-4 text-center text-xs">
        <span>&copy; renhou</span>
        <span class="mx-2">🍅</span>
        <span><a href="https://github.com/kensoz/portfolio" class="hover:underline">about site</a></span>
      </footer>
    </div>
  </main>
</template>
