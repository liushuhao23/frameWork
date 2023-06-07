/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-30 20:40:23
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-05-31 00:48:28
 */
import '../src/App.css';
import { themes, addDecorator } from '@storybook/theming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';


const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'dark',
    // disabled: true,
    list: [
      { name: 'dark', class: '', color: '#1b1b24' },
      { name: 'light', class: 'theme-light' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: {
      ...themes.dark, // UI
      appBg: '#1b1b24',
      appContentBg: '#1b1b24',
      // appBorderColor: 'grey',
      appBorderRadius: 4,
      // Toolbar default and active colors
      barTextColor: 'white',
      // barSelectedColor: 'white',
      barBg: '#1b1b24',
      appBorderRadius: 4,
      inputBorderRadius: 4,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
