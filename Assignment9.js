document.addEventListener('DOMContentLoaded', (event) => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    // Load todos from local storage
    loadTodos();

    // Add todo event
    addTodoBtn.addEventListener('click', addTodo);

    // Function to add todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todos = getTodos();
        todos.push(todoText);
        saveTodos(todos);

        todoInput.value = '';
        renderTodos(todos);
    }

    // Function to get todos from local storage
    function getTodos() {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    }

    // Function to save todos to local storage
    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Function to render todos to the UI
    function renderTodos(todos) {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item todo-item';
            li.textContent = todo;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm float-right';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTodo(index));
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    // Function to delete todo
    function deleteTodo(index) {
        const todos = getTodos();
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos(todos);
    }

    // Function to load todos initially
    function loadTodos() {
        const todos = getTodos();
        renderTodos(todos);
    }
});