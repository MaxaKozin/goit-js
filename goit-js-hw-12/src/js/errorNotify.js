import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { error } from '../../node_modules/@pnotify/core/dist/PNotify';

export default function () {
  error({
    title: 'Too many matches found!',
    text: 'Please enter more specific query...',
  });
}
