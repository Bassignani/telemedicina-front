/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    colors: {
      pearl: '#f0ead6', // Ajusta este valor al tono perlado que desees
      green: {
        400: '#34d399',
        800: '#064e3b', // Define tu color verde oscuro aquí
      },
      zinc: {
        100: '#f4f4f5', // Asegúrate de definir este color si lo estás utilizando
      },
    },
    // colors: {
    //   primary: {
    //     50: '#f8fafc',
    //     100: '#f1f5f9',
    //     200: '#e2e8f0',
    //     300: '#cbd5e1',
    //     400: '#94a3b8',
    //     500: '#64748b',
    //     600: '#475569',
    //     700: '#334155',
    //     800: '#1e293b',
    //     900: '#0f172a',
    //   },
    //   secondary: {
    //     50: '#ecfdf5',
    //     100: '#d1fae5',
    //     200: '#a7f3d0',
    //     300: '#6ee7b7',
    //     400: '#34d399',
    //     500: '#10b981',
    //     600: '#059669',
    //     700: '#047857',
    //     800: '#065f46',
    //     900: '#064e3b',
    //   },
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

