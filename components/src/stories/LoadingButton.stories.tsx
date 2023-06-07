/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-29 18:25:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-06-01 12:34:53
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingButtonCom } from '../components/Button/LoadingButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoadingButton',
  component: LoadingButtonCom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LoadingButtonCom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingButtonCom> = (args) => <LoadingButtonCom {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//     primary: true,
//     label: 'Slider',
//   };
