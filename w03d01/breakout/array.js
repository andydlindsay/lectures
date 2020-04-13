const template = (vars) => {
  const todos = [];
  for (const todo of vars.todos) {
    todos.push(`<li>${todo.task} (${todo.id})</li>`)
  }

  return `
    <div>
      <h1>Todos for ${vars.username}:</h1>
      <ul>
        ${todos.join('\n\t')}
      </ul>
    </div>
  `;
};

module.exports = template;
