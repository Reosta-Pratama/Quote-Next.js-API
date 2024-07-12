/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            'phones': {
                'max': '600px'
            },
            "lg-phones": "600px",
            "tablets": "768px",
            "lg-tablets": "992px",
            "desktop": "1200px"
        },
    },
  },
  plugins: [],
}
