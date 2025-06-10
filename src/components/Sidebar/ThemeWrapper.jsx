import { ThemeProvider } from 'styled-components';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const ThemeWrapper = ({ color, children }) => {
  const theme = color === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;