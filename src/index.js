import "./styles/index.css";

function addTodo(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

const todoLists = [];

function pushTodo(title, description, dueDate, priority, notes) {
    let newTodo = new addTodo("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate");
    // ("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate")
    return todoLists.push(newTodo);
}

// pushTodo();

function loadTodo() {
    const list_contents = document.querySelector(".list-contents");
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `
    
    `;
}
