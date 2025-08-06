module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: { DEFAULT: "#3B82F6", foreground: "#FFFFFF" },
                destructive: { DEFAULT: "#EF4444", foreground: "#FFFFFF" },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Inter", "sans-serif"],
                mono: ['Space Grotesk', 'monospace']
            },
            fontSize : {}
        }
    },
    plugins: [ require( "tailwindcss-animate")],
};

