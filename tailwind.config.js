/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'custom-green': '#1DD100',
                'custom-yellow': '#FFBF0F',
                'custom-pink': '#F78C9C',
                'button-color': 'rgba(29, 209, 0, 0.15)',
            },
            fontFamily: {
                inter: 'Inter',
                raleway: 'Raleway',
            },
        },
    },
    plugins: [],
}