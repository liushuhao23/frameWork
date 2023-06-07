/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-29 18:27:02
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-06-01 12:33:40
 */
import React from 'react';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

import SaveIcon from '@mui/icons-material/Save';

 
/**
 * Primary UI component for user interaction
 */
export const LoadingButtonCom = (props: LoadingButtonProps) : JSX.Element => {
  return (
    <>
      <LoadingButton {...props}  startIcon={<SaveIcon />}>
        Submit
      </LoadingButton>
    </>
  );
};