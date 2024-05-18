function addTodo(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

const todoLists = [];

function loadTodo(title, description, dueDate, priority, notes) {

    // let newTodo = new addTodo(title, description, dueDate, priority, notes);
    let newTodo = new addTodo("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate");

    // ("Brush teeth", "Get up and brush my teeth", "January 1st 2022", "High", "Use colgate")

    return todoLists.push(newTodo);
}
loadTodo();

console.log(todoLists);