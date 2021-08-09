import { refs } from './refs/refs';
import createMenuMarkup from '../templates/menu-template.hbs';
import menudata from './data/menu.json';

const menuMarkup = createMenuMarkup(menudata);

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);
