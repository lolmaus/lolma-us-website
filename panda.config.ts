import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictTokens: true,
  strictPropertyValues: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,ts,svelte}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xxs: '0',
        xs: '200px',
        sm: '400px',
        md: '600px',
        lg: '800px',
        xl: '1000px',
        '2xl': '1200px',
        '3xl': '1400px',
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
