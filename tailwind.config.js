/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // src 디렉토리 사용 시
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        // Night Sky Theme Colors
        'night-sky-bg': '#FDFCFB',
        'night-sky-text': '#333333',
        'gradient-start': '#e2ecff',
        'gradient-end': '#FFDAB9',

        // 🌿 기존 배경 색상 (유지)
        'custom-bg': '#F9F7F5',

        // 🌫️ 헤더 배경용 (유지)
        'header-start': '#ECE9E3',
        'header-end': '#FAFAFC',

        // 🎯 포인트 색상
        'accent-pink': '#FF8C69',
        'accent-soft-pink': '#FFDAB9',

        // 🔵 텍스트 기본 색상
        'text-primary': '#333333',
        'text-second': '#5c3e26',

        // 🌸 보조 회색 계열 (유지)
        'gray-light': '#EDEDED',
        'gray-lighter': '#F5F5F5',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
