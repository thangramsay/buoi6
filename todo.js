const todoContainer = document.querySelector(".todo-container"); 
fetch('https://6640417fa7500fcf1a9d64cc.mockapi.io/task', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then((todos) => {
    console.log(todos);
    todos.forEach((todo) =>{
        const todo = document.createElement('div')
        todoElement.innerHTML =
        `<p>Ngay tao : ${todo.createdAT} </p>
        <P>Name : ${todo.name}</P>`

    });
  // Do something with the list of tasks
}).catch((error) => {
  // handle error
})