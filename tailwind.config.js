/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors : {
        "TGS-moderate-violet": "hsl(263, 55%, 52%)",
        "TGS-grayish-blue": "hsl(217, 19%, 35%)",
        "TGS-blackish-blue": "hsl(219, 29%, 14%)",
        "TGS-white": "hsl(0, 0%, 100%)",
        "TGS-light-gray": "hsl(0, 0%, 81%)",
        "TGS-light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily : {
        "TGS-barlow-semi-condensed": ['Barlow Semi Condensed', 'sans-serif'],
      },
      backgroundImage: {
        "TGS-image" : "url('../images/bg-pattern-quotation.svg')"
      }
    },
  },
  plugins: [],
}

