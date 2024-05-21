import "./styles/index.css";

function createTodo(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

const todoLists = [];

function pushTodo(title, description, dueDate, priority, notes) {
    let newTodo = new createTodo("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate");
    // ("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate")
    return todoLists.push(newTodo);
}

// pushTodo();

function loadTodo() {
    const list_contents = document.querySelector(".list-contents");
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `
    <div class="todo">
        <div class="todo-1">
            <p>Brush teeth</p>
        </div>
        <div class="todo-2">
            <div>DETAILS</div>
            <div>DATE</div>
            <div>EDIT</div>
            <div>DELETE</div>
        </div>
    `;

    list_contents.appendChild(newDiv);
}


function addTodo() {
    const createButton = document.querySelector('.create');

    createButton.addEventListener('click', (e) => {
        loadTodo();
    });
}

addTodo();