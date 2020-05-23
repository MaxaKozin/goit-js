import './styles.scss';
import './js/theme';
import { html } from './js/templating'

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML("beforeend", html);


