const plugin = require('tailwindcss/plugin');
const stylesComponents = require('./styles')
const Components = plugin(
  ({ addBase, addComponents, theme }) => {
    console.log(
      '🍺 @work-custom-tailwind-plugin启动成功 🍺',
      addBase,
      addComponents,
      theme
    );
    addComponents(stylesComponents);
  },
  // {
  //   theme: {
  //     colors: {
  //       // <div class="text-yc-select-hover"></div>
  //       'work-select-hover': 'var(--sc-bgcolor)',
  //     },
  //   },
  // }
);
module.exports = Components;
