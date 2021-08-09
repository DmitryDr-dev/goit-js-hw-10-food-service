import { refs } from './refs/refs';

const themeKey = 'theme';

refs.themeSwitchControl.addEventListener('change', handleChangeTheme);

restoreTheme();

// setDefaultTheme();

function handleChangeTheme() {
  refs.documentBody.classList.toggle('dark-theme');

  switch (getCurrentTheme()) {
    case 'dark':
      localStorage.setItem(themeKey, 'light');
      break;

    case 'light':
      localStorage.setItem(themeKey, 'dark');
      break;

    default:
      break;
  }
}

function restoreTheme() {
  switch (getCurrentTheme()) {
    case 'dark':
      refs.documentBody.classList.add('dark-theme');
      refs.themeSwitchControl.checked = true;
      break;

    case 'light':
      refs.documentBody.classList.remove('dark-theme');
      break;

    default:
      break;
  }
}

function getCurrentTheme() {
  let currentThemeValue = null;

  if (!localStorage.getItem(themeKey)) {
    currentThemeValue = localStorage.setItem(themeKey, 'light');
  } else {
    currentThemeValue = localStorage.getItem(themeKey);
  }

  return currentThemeValue;
}
