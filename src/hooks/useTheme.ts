import StorageService from '@/services/localStorageSerivce';
import { useEffect, useState } from 'react';

type ITheme = 'default' | 'dark';

const storageService = new StorageService();
const APP_THEME_STORE_KEY = 'app-color-theme';

const isValidTheme = (value: string) => {
  const themesList = [ 'default', 'dark' ];
  return themesList.includes(value);
};

const useTheme = () => {

  const response = storageService.get(APP_THEME_STORE_KEY);
  const storedTheme = response.success ? response.value as string : undefined;
  const themeValue: ITheme = storedTheme && isValidTheme(storedTheme) 
    ? storedTheme as ITheme
    : 'default';
  
  const initialTheme = 
    themeValue === 'default'
      && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark' 
    : themeValue;


  const [ theme, setTheme ] = useState<ITheme>(initialTheme);

  const dark = theme === 'dark';


  const toggleTheme = () => {
    const nTheme = dark ? 'default' : 'dark';
    storageService.store(APP_THEME_STORE_KEY, nTheme);
    setTheme(nTheme);
  };


  useEffect(() => {

    const docElement = document.documentElement;
    docElement.classList.add(theme);
    return () => {
      docElement.classList.remove(theme);
    };
  }, [ theme ]);

  return {
    toggleTheme,
    dark,
    theme
  };
};

export { useTheme };