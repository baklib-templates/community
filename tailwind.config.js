/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./statics/**/*.liquid"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: () => {
        return {
          slate: {
            150: "#E9EEF5"
          },
          navy: {
            50: "#E7E9EF",
            100: "#C2C9D6",
            300: "#697A9B",
            400: "#5C6B8A",
            450: "#465675",
            500: "#384766",
            700: "#26334D"
          },
          base: {
            100: "hsl(var(--tw-base-100) / <alpha-value>)",
            200: "hsl(var(--tw-base-200) / <alpha-value>)",
            300: "hsl(var(--tw-base-300) / <alpha-value>)",
            content: "hsl(var(--tw-base-content) / <alpha-value>)",
          },
          neutral: {
            DEFAULT: "hsl(var(--tw-neutral) / <alpha-value>)",
            content: "hsl(var(--tw-neutral-content) / <alpha-value>)",
          },
          "primary-content": "hsl(var(--tw-primary-content) / <alpha-value>)",
          "secondary-content": "hsl(var(--tw-secondary-content) / <alpha-value>)",
          "accent-content": "hsl(var(--tw-accent-content) / <alpha-value>)",
          "info-content": "hsl(var(--tw-info-content) / <alpha-value>)",
          "success-content": "hsl(var(--tw-success-content) / <alpha-value>)",
          "warning-content": "hsl(var(--tw-warning-content) / <alpha-value>)",
          "error-content": "hsl(var(--tw-error-content) / <alpha-value>)",
          ...["primary", "secondary", "accent", "info", "success", "warning"].reduce((map, name) => {
            return {
              ...map,
              [name]: {
                DEFAULT: `hsl(var(--tw-${name}) / <alpha-value>)`,
                lighten: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) + 15%))`,
                darken: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) - 15%))`,
                ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].reduce((map,lightness) => {
                  return {
                    ...map,
                    [lightness]: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) ${100 - lightness/10*0.8}%)`
                  }
                }, {})
              }
            }
          }, {}),
          // 错误色永远是红色，饱和度与主色调保持一致
          error: {
            DEFAULT: `hsl(355 75% var(--theme-color-primary-hsl-l) / <alpha-value>)`,
            lighten: `hsl(355 75% calc(var(--theme-color-primary-hsl-l) + 15%))`,
            darken: `hsl(355 75% calc(var(--theme-color-primary-hsl-l) - 15%))`,
            ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].reduce((map,lightness) => {
              return {
                ...map,
                [lightness]: `hsl(355 75% ${100 - lightness/10*0.8}%)`
              }
            }, {})
          }
        }
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        18: "4.5rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

