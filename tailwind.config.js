module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#7c5cd6",

"secondary": "#0255e5",

"third": "#aaf3f7",

"accent": "#6558f4",

"neutral": "#212331",

"base-100": "#373D49",

"info": "#9BB4DF",

"success": "#1FDBB2",

"warning": "#aaf3f7",

"error": "#FA0F4E",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
