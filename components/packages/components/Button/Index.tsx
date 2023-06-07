/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-29 18:27:02
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 16:22:21
 */
import React from 'react';
import './button.css';

import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';

// interface ButtonProps {
//   /**
//    * 测试组件
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

/**
 * Primary UI component for user interaction
 */
 export const ButtonCom = (props: ButtonProps) : JSX.Element => {
  return (
    <>
      <Button 
        classes="{ active: 'shadow-none'}"
        {...props}
      >Text</Button>
    </>
  );
};

export default ButtonCom

