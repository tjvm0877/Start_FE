import { render } from './html-render';
import todomodel from './todo-model';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = $input.value;
    if (!text) return;
    $input.value = '';

    data.push({
      ...todomodel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};
