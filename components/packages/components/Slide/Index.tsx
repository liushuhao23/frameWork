/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-30 14:53:36
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 14:46:54
 */
import { Slider } from '@mui/material';
const CustomSlider = () => {
  // const styles = {
  //   width: 100,
  //   height:100,
  //   backgroundColor: 'var(--primary-color-6)'
  // }
  return (
    <>
    {/* <div style={styles}></div> */}
    <Slider
      defaultValue={30}
      className="text-teal-600"
      classes={{ active: 'shadow-none' }}
      componentsProps={{
        thumb: { className: 'rounded-sm hover:bg-yellow-200' },
      }}
    />
    </>
  );
};

export default CustomSlider