import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.themes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.themes, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.themes.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};