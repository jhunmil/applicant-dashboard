/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/*.js"],
  theme: {
    extend: {
      colors:{
        primaryblue:{
          900:"#0D3F60",
          DEFAULT:'#2B77A5',
        },
        accentblue:{
          600:"#0094d1",
          DEFAULT:'#00A0DF',
        },
        activegray:{
          DEFAULT:'#F3F5F7',
        },
        linkpurple:{
         
          DEFAULT:'#7460EE'
        }
      },
      height: {
        '90per': 'calc(100% - 180px)',
      },
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia']
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

