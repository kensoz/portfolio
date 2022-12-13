/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Murecho', 'メイリオ', '游ゴシック', 'Microsoft YaHei', '微软雅黑', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
