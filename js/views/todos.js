

function proccessData(data) {
  return data.map(function(item) {
    return `
      <li class='todo-list-item' data-todo-id="${item.objectId}">${item.title}</li>
    `
  }).join('');
}

function todosTemplate(data) {
  return `
    <h2>Something Todo</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default todosTemplate
