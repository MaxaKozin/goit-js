import menu from '../menu.json';
import template from '../templates/menu-item.hbs';

const html = template(menu);
export { html };