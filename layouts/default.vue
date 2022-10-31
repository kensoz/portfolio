<template>
  <div class="flex justify-center h-screen w-full text-gray-500 bg-gray-50">
    <!-- Nuxt Layout -->
    <div class="flex flex-col h-full w-full md:w-9/12 sm:w-11/12 mx-3">
      <!-- Header -->
      <header class="flex justify-between items-center my-4">
        <div>
          <img class="w-9 h-auto rounded" src="/portfolio/logo.png" alt="Logo" />
        </div>

        <div>
          <button class="flex justify-center pt-1.5 pb-1 px-4 text-sm font-semibold rounded bg-gray-200 hover:bg-gray-300" @click="jump()">
            <span>
              <fa-icon :icon="['fab', 'github']" size="lg" />
              GitHub
            </span>
          </button>
        </div>
      </header>

      <!-- main contents -->
      <main class="flex-grow flex justify-center items-center mb-5">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="text-center text-xs my-4">
        <span>&copy; renhou</span>
        <span class="mx-2">🍅</span>
        <span><a href="https://github.com/kensoz/portfolio" class="hover:underline">about site</a></span>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
// ----- リンク -----
const GitHub = 'https://github.com/kensoz'
const jump = (): void => {
  window.location.href = GitHub
}
</script>
