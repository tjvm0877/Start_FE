import './todos.css';
import { render } from './html-render';
import forminput from './form-input';

const $result = document.querySelector('#result');

const todos = [
  {
    text: 'js공부',
    isDone: false,
  },
];

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  console.log(typeof className);
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    console.log(index);
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
    console.log(todos[index].isDone);
  }
});

forminput.init(todos);
render(todos);
