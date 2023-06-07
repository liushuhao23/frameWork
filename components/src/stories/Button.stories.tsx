/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-29 18:25:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 16:21:26
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonCom } from '../components/Button/Index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonCom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ButtonCom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonCom> = (args) => <ButtonCom {...args} />;

export const Primary = Template.bind({});
