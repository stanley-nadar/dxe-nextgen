import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, ThemeOptions, createTheme } from '@mui/material/styles';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from 'quarks/GlobalStyles';

import { getAppTheme } from 'theme/getAppTheme';

interface ThemeProviderProps {
  /**
   * The rest of your application must be passed in as a child.
   */
  children: ReactNode;
}

const ThemeContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => null]);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themes = useMemo(() => {
    const styled = getAppTheme(isDarkMode ? 'dark' : 'light');

    return {
      styled,
      mui: createTheme(styled as ThemeOptions),
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <StyledThemeProvider theme={themes.styled}>
        <MuiThemeProvider theme={themes.mui}>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useDarkMode = () => useContext(ThemeContext);

export default useDarkMode;
