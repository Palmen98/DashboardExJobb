/* eslint-disable import/no-anonymous-default-export */
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.js';

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
