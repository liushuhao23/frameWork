module.exports = {
    plugins: [
      'postcss-import',
      'tailwindcss/nesting',
      'tailwindcss',
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          // features: {
          //   'nesting-rules': true,
          // },
          stage: 3,
        },
      ],
    ],
  };
  