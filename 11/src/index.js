import './todos.css';
import { loadData } from './data-manager';
import { render } from './html-render';
import forminput from './form-input';

const $result = document.querySelector('#result');

const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;

  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

console.log(todos);
forminput.init(todos);
render(todos);
