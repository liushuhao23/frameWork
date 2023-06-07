/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-31 18:48:15
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-05-31 19:58:39
 */
const style = {
   'body': {
    "caret-color": "var(--primary-color)"
   },
  '#root': {
    '--neutral-color-rgb-1': '246, 249, 252',
    '--neutral-color-rgb-2': '236, 240, 248',
    '--neutral-color-rgb-3': '225, 230, 241',
    '--neutral-color-rgb-4': '201, 210, 225',
    '--neutral-color-rgb-5': '157, 170, 194',
    '--neutral-color-rgb-6': '109, 123, 152',
    '--neutral-color-rgb-7': '71, 81, 106',
    '--neutral-color-rgb-8': '42, 51, 74',
    '--neutral-color-rgb-9': '24, 30, 45',
    '--neutral-color-rgb-10': '14, 17, 27',

    /********** NEUTRAL COLOR [中性色]  **********/
    '--neutral-color-1': 'rgb(var(--neutral-color-rgb-1))' /** #f6f9fc **/,
    '--neutral-color-2': 'rgb(var(--neutral-color-rgb-2))' /** #ECF0F8 **/,
    '--neutral-color-3': 'rgb(var(--neutral-color-rgb-3))' /** #E1E6F1 **/,
    '--neutral-color-4': 'rgb(var(--neutral-color-rgb-4))' /** #C9D2E1 **/,
    '--neutral-color-5': 'rgb(var(--neutral-color-rgb-5))' /** #9DAAC2 **/,
    '--neutral-color-6': 'rgb(var(--neutral-color-rgb-6))' /** #6D7B98 **/,
    '--neutral-color-7': 'rgb(var(--neutral-color-rgb-7))' /** #47516A **/,
    '--neutral-color-8': 'rgb(var(--neutral-color-rgb-8))' /** #2A334A **/,
    '--neutral-color-9': 'rgb(var(--neutral-color-rgb-9))' /** #181E2D **/,
    '--neutral-color-10': 'rgb(var(--neutral-color-rgb-10))' /** #0E111B **/,

    '--primary-color-rgb-1': '255, 246, 240',
    '--primary-color-rgb-2': '255, 229, 214',
    '--primary-color-rgb-3': '255, 201, 173',
    '--primary-color-rgb-4': '255, 169, 133',
    '--primary-color-rgb-5': '255, 135, 92',
    '--primary-color-rgb-6': '246, 93, 48',

    '--primary-color-rgb-7': '207, 66, 31',
    '--primary-color-rgb-8': '168, 42, 17',
    '--primary-color-rgb-9': '130, 23, 7',
    '--primary-color-rgb-10': '92, 12, 4',

    /********** BRAND COLOR AKA PRIMARY COLOR [品牌色/主色] **********/
    '--primary-color-1': 'rgb(var(--primary-color-rgb-1))' /** #FFF6F0 **/,
    '--primary-color-2': 'rgb(var(--primary-color-rgb-2))' /** #FFE5D6 **/,
    '--primary-color-3': 'rgb(var(--primary-color-rgb-3))' /** #FFC9AD **/,
    '--primary-color-4': 'rgb(var(--primary-color-rgb-4))' /** #FFA985 **/,
    '--primary-color-5': 'rgb(var(--primary-color-rgb-5))' /** #FF875C **/,
    '--primary-color-6': 'rgb(var(--primary-color-rgb-6))' /** #F65D30 **/,
    '--primary-color-7': 'rgb(var(--primary-color-rgb-7))' /** #CF421F **/,
    '--primary-color-8': 'rgb(var(--primary-color-rgb-8))' /** #A82A11 **/,
    '--primary-color-9': 'rgb(var(--primary-color-rgb-9))' /** #821707 **/,
    '--primary-color-10': 'rgb(var(--primary-color-rgb-10))' /** #5C0C04 **/,

    '--red-1': 'rgb(var(--red-rgb-1))' /** #FFF2F0 **/,
    '--red-2': 'rgb(var(--red-rgb-2))' /** #FFDCD6 **/,
    '--red-3': 'rgb(var(--red-rgb-3))' /** FFB6AD **/,
    '--red-4': 'rgb(var(--red-rgb-4))' /** #FF8D85 **/,
    '--red-5': 'rgb(var(--red-rgb-5))' /** #FF625B **/,
    '--red-6': 'rgb(var(--red-rgb-6))' /** #F43030 **/,
    '--red-7': 'rgb(var(--red-rgb-7))' /** #CF1F25 **/,
    '--red-8': 'rgb(var(--red-rgb-8))' /** #A8111B **/,
    '--red-9': 'rgb(var(--red-rgb-9))' /** #820713 **/,
    '--red-10': 'rgb(var(--red-rgb-10))' /** #5C040F **/,

    /********** ORANGE COLOR [橙色]  **********/
    '--orange-rgb-1': '255, 246, 230',
    '--orange-rgb-2': '255, 218, 163',
    '--orange-rgb-3': '255, 198, 122',
    '--orange-rgb-4': '255, 174, 82',
    '--orange-rgb-5': '255, 148, 41',
    '--orange-rgb-6': '255, 119, 0',
    '--orange-rgb-7': '217, 94, 0',
    '--orange-rgb-8': '179, 71, 0',
    '--orange-rgb-9': '140, 51, 0',
    '--orange-rgb-10': '102, 34, 0',

    '--orange-1': 'rgb(var(--orange-rgb-1))' /** #FFF6E6 **/,
    '--orange-2': 'rgb(var(--orange-rgb-2))' /** #FFDAA3 **/,
    '--orange-3': 'rgb(var(--orange-rgb-3))' /** #FFC67A **/,
    '--orange-4': 'rgb(var(--orange-rgb-4))' /** #FFAE52 **/,
    '--orange-5': 'rgb(var(--orange-rgb-5))' /** #FF9429 **/,
    '--orange-6': 'rgb(var(--orange-rgb-6))' /** #FF7700 **/,
    '--orange-7': 'rgb(var(--orange-rgb-7))' /** #D95E00 **/,
    '--orange-8': 'rgb(var(--orange-rgb-8))' /** #B34700 **/,
    '--orange-9': 'rgb(var(--orange-rgb-9))' /** #8C3300 **/,
    '--orange-10': 'rgb(var(--orange-rgb-10))' /** #662200 **/,

    /********** YELLOW COLOR [黄色]  **********/
    '--yellow-rgb-1': '255, 251, 230',
    '--yellow-rgb-2': '255, 238, 163',
    '--yellow-rgb-3': '255, 226, 122',
    '--yellow-rgb-4': '255, 212, 82',
    '--yellow-rgb-5': '255, 194, 41',
    '--yellow-rgb-6': '255, 174, 0',
    '--yellow-rgb-7': '217, 141, 0',
    '--yellow-rgb-8': '179, 110, 0',
    '--yellow-rgb-9': '140, 82, 0',
    '--yellow-rgb-10': '102, 56, 0',

    '--yellow-1': 'rgb(var(--yellow-rgb-1))' /** #FFFBE6 **/,
    '--yellow-2': 'rgb(var(--yellow-rgb-2))' /** #FFEEA3 **/,
    '--yellow-3': 'rgb(var(--yellow-rgb-3))' /** #FFE27A **/,
    '--yellow-4': 'rgb(var(--yellow-rgb-4))' /** #FFD452 **/,
    '--yellow-5': 'rgb(var(--yellow-rgb-5))' /** #FFC229 **/,
    '--yellow-6': 'rgb(var(--yellow-rgb-6))' /** #FFAE00 **/,
    '--yellow-7': 'rgb(var(--yellow-rgb-7))' /** #D98D00 **/,
    '--yellow-8': 'rgb(var(--yellow-rgb-8))' /** #B36E00 **/,
    '--yellow-9': 'rgb(var(--yellow-rgb-9))' /** #8C5200 **/,
    '--yellow-10': 'rgb(var(--yellow-rgb-10))' /** #663800 **/,

    /********** PURPLE COLOR [紫色] **********/
    '--purple-rgb-1': '245, 240, 255',
    '--purple-rgb-2': '216, 199, 255',
    '--purple-rgb-3': '184, 158, 255',
    '--purple-rgb-4': '149, 117, 255',
    '--purple-rgb-5': '111, 76, 255',
    '--purple-rgb-6': '79, 52, 217',
    '--purple-rgb-7': '55, 36, 179',
    '--purple-rgb-8': '33, 21, 140',
    '--purple-rgb-9': '20, 14, 102',
    '--purple-rgb-10': '18, 11, 81',

    '--purple-1': 'rgb(var(--purple-rgb-1))' /** #F5F0FF **/,
    '--purple-2': 'rgb(var(--purple-rgb-2))' /** #D8C7FF **/,
    '--purple-3': 'rgb(var(--purple-rgb-3))' /** #B89EFF **/,
    '--purple-4': 'rgb(var(--purple-rgb-4))' /** #9575FF **/,
    '--purple-5': 'rgb(var(--purple-rgb-5))' /** #6F4CFF **/,
    '--purple-6': 'rgb(var(--purple-rgb-6))' /** #6F4CFF **/,
    '--purple-7': 'rgb(var(--purple-rgb-7))' /** #3724B3 **/,
    '--purple-8': 'rgb(var(--purple-rgb-8))' /** #21158C **/,
    '--purple-9': 'rgb(var(--purple-rgb-9))' /** #140E66 **/,
    '--purple-10': 'rgb(var(--purple-rgb-10))' /** #12"0B51 **/,

    /********** link-color COLOR [链接色] **********/
    '--link-color-rgb-1': '230 240 255',
    '--link-color-rgb-2': '179 209 255',
    '--link-color-rgb-3': '153, 190, 255',
    '--link-color-rgb-4': '128, 170, 255',
    '--link-color-rgb-5': '102, 148, 255',
    '--link-color-rgb-6': '65, 106, 217',
    '--link-color-rgb-7': '38, 74, 191',
    '--link-color-rgb-8': '17, 46, 166',
    '--link-color-rgb-9': '0, 23, 140',
    '--link-color-rgb-10': '0, 15, 115',

    '--link-color-1': 'rgb(var(--link-color-rgb-1))' /** #E6F0FF **/,
    '--link-color-2': 'rgb(var(--link-color-rgb-2))' /** #B3D1FF **/,
    '--link-color-3': 'rgb(var(--link-color-rgb-3))' /** #99BEFF **/,
    '--link-color-4': 'rgb(var(--link-color-rgb-4))' /** #80AAFF **/,
    '--link-color-5': 'rgb(var(--link-color-rgb-5))' /** #6694ff **/,
    '--link-color-6': 'rgb(var(--link-color-rgb-6))' /** #416AD9 **/,
    '--link-color-7': 'rgb(var(--link-color-rgb-7))' /** #264ABF **/,
    '--link-color-8': 'rgb(var(--link-color-rgb-8))' /** #112EA6 **/,
    '--link-color-9': 'rgb(var(--link-color-rgb-9))' /** #00178C **/,
    '--link-color-10': 'rgb(var(--link-color-rgb-10))' /** #000F73 **/,
    /********** GREEN COLOR [绿色] **********/
    '--green-rgb-1': '230, 255, 241',
    '--green-rgb-2': '155, 242, 196',
    '--green-rgb-3': '110, 230, 170',
    '--green-rgb-4': '69, 217, 148',
    '--green-rgb-5': '33, 204, 130',
    '--green-rgb-6': '0, 190, 113',
    '--green-rgb-7': '0, 153, 97',
    '--green-rgb-8': '0, 115, 76',
    '--green-rgb-9': '0, 77, 54',
    '--green-rgb-10': '0, 38, 28',

    '--green-1': 'rgb(var(--green-rgb-1))' /** #E6FFF1 **/,
    '--green-2': 'rgb(var(--green-rgb-2))' /** #9BF2C4 **/,
    '--green-3': 'rgb(var(--green-rgb-3))' /** #6EE6AA **/,
    '--green-4': 'rgb(var(--green-rgb-4))' /** #45D994 **/,
    '--green-5': 'rgb(var(--green-rgb-5))' /** #21CC82 **/,
    '--green-6': 'rgb(var(--green-rgb-6))' /** #00BE71 **/,
    '--green-7': 'rgb(var(--green-rgb-7))' /** #009961 **/,
    '--green-8': 'rgb(var(--green-rgb-8))' /** #00734C **/,
    '--green-9': 'rgb(var(--green-rgb-9))' /** #004D36 **/,
    '--green-10': 'rgb(var(--green-rgb-10))' /** #00261C **/,

    /********** BLUE COLOR [蓝色] **********/
    '--blue-rgb-1': '230, 247, 255',
    '--blue-rgb-2': '173, 228, 255',
    '--blue-rgb-3': '133, 210, 255',
    '--blue-rgb-4': '92, 190, 255',
    '--blue-rgb-5': '51, 167, 255',
    '--blue-rgb-6': '10, 135, 245',
    '--blue-rgb-7': '0, 103, 207',
    '--blue-rgb-8': '0, 79, 168',
    '--blue-rgb-9': '0, 56, 130',
    '--blue-rgb-10': '0, 37, 92',

    '--blue-1': 'rgb(var(--blue-rgb-1))' /** #E6F7FF **/,
    '--blue-2': 'rgb(var(--blue-rgb-2))' /** #ADE4FF **/,
    '--blue-3': 'rgb(var(--blue-rgb-3))' /** #85D2FF **/,
    '--blue-4': 'rgb(var(--blue-rgb-4))' /** #5CBEFF **/,

    '--blue-5': 'rgb(var(--blue-rgb-5))' /** #33A7FF **/,
    '--blue-6': 'rgb(var(--blue-rgb-6))' /** #0A87F5 **/,
    '--blue-7': 'rgb(var(--blue-rgb-7))' /** #0067CF **/,
    '--blue-8': 'rgb(var(--blue-rgb-8))' /** #004FA8 **/,
    '--blue-9': 'rgb(var(--blue-rgb-9))' /** #003882 **/,
    '--blue-10': 'rgb(var(--blue-rgb-10))' /** #00255C **/,


    /********** BASIC COLOR [通用基础颜色] **********/
    "--primary-color":  " var(--primary-color-6)",
    "--shadow-color":  " rgba(var(--neutral-color-rgb-5),0.2)",
    "--default-color":  " var(--neutral-color-5)",
    "--highlight-color":  " var(--red-5)",
    "--disabled-color":  " var(--neutral-color-5)",
    "--disabled-bg":  " var(--neutral-color-1)",
    "--border-color-base":  " var(--neutral-color-3)",
    "--text-color":  "  var(--neutral-color-8)",
    "--text-color-secondary":  " var(--neutral-color-7)",
    "--text-selection-bg":  " var(--primary-color)",
    "--heading-color":  " var(--neutral-color-9)",
    "--background-color-light":  " #FFF",
    "--background-color-base":  "  rgba(var(--neutral-color-rgb-3), 0.4)",




    /**********  LINK COLOR [链接颜色] **********/
    "--link-color":  " #4868bd",
    "--link-hover-color":  " #5c8ae6",
    "--link-active-color":  " #354db0",
    "--link-disable-color":  " var(--disabled-color)",


    /********** INFO COLOR [信息颜色] **********/
    "--info-color":  " var(--blue-6)",
    "--success-color":  " var(--green-6)",
    "--processing-color":  " var(--blue-6)",
    "--error-color":  " var(--red-6)",
    "--warning-color":  " var(--yellow-6)",


    /********** COMPONENT COMMON COLOR [组件通用颜色] **********/
    "--component-background": " rgba(var(--neutral-color-rgb-3), 0.6)",


    /********** BUTTON COLOR [Button 颜色] **********/
    "--btn-primary-bg": "  linear-gradient(135deg, var(--primary-color), var(--primary-color-5))", /** 对角渐变 从左上到右下 **/

    /********** TABLE COLOR [Table 颜色] **********/
    "--table-fixed-odd-row-bg": " #F2F4F9",
    "--table-fixed-even-row-bg": " #F9FAFC",

    /********** MODAL COLOR [Modal 颜色] **********/
   "--modal-bg": " rgba(var(--neutral-color-rgb-1), 0.95)",
  },
};
module.exports = style;
