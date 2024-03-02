import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';

export default defineConfig({
  plugins: [svelteFluent(), sveltekit()],

  server: {
    fs: {
      allow: ['styled-system'],
    },
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
