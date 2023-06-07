/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-07 09:27:08
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 15:59:52
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomSlider from '../components/Slide/Index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CustomSlider',
  component: CustomSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomSlider> = (args) => <CustomSlider />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Slider',
};
