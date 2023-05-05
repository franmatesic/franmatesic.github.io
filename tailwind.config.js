const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,svelte}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: colors.blue['700'],
                    light: colors.blue['600'],
                    lighter: colors.blue['500'],
                    dark: colors.blue['800'],
                    darker: colors.blue['900']
                },
                light: {
                    DEFAULT: colors.neutral['100'],
                    light: colors.neutral['50'],
                    dark: colors.neutral['200'],
                    darker: colors.neutral['400']
                },
                dark: {
                    DEFAULT: colors.neutral['800'],
                    light: colors.neutral['700'],
                    lighter: colors.neutral['500'],
                    dark: colors.neutral['900']
                },
                success: {
                    DEFAULT: colors.green['500'],
                    light: colors.green['400'],
                    dark: colors.green['600']
                },
                info: {
                    DEFAULT: colors.sky['500'],
                    light: colors.sky['400'],
                    dark: colors.sky['600']
                },
                warning: {
                    DEFAULT: colors.yellow['300'],
                    light: colors.yellow['200'],
                    dark: colors.yellow['400']
                },
                danger: {
                    DEFAULT: colors.red['500'],
                    light: colors.red ['400'],
                    dark: colors.red['600']
                }
            },
            fontFamily: {
                castoro: 'Castoro Titling, cursive',
                gruppo: 'Gruppo, cursive',
                imbue: 'Imbue, serif'
            }
        }
    },
    plugins: [],
    darkMode: 'class'
};

