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
    const title_input = document.getElementById('title');
    const description_input = document.getElementById('description');
    const due_date_input = document.getElementById('dueDate');

    const list_contents = document.querySelector(".list-contents");
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `
    <div class="todo">
        <div class="todo-1">
            <p>${title_input.value}</p>
        </div>
        <div class="todo-2">
            <div class="details" data-description="${description_input.value}">DETAILS</div>
            <div>${due_date_input.value}</div>
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

// addTodo();


function createDialog() {
    const content = document.querySelector('#content');
    const createButton = document.querySelector('.create');

    const dialog = document.createElement('dialog');
    dialog.classList.add('todoDialog');
    dialog.innerHTML += `
    <p>Greetings, one and all!</p>
    <form method="dialog">
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title"/>
    </div>

    <div>
        <label for="description">Description</label>
        <input type="text" name="description" id="description" />
    </div>

    <div>
        <label for="dueDate">Due date</label>
        <input type="number" name="dueDate" id="dueDate" />
    </div>

    <button type="submit" id="submit-button">Submit</button>
    </form>
    `;
    content.appendChild(dialog);

    createButton.addEventListener('click', (e) => {
        dialog.showModal();
    });

    const closeButton = document.querySelector("dialog button");
    closeButton.addEventListener('click', (e) => {
        loadTodo();
        dialog.close();
    });
}

createDialog();

function showDetails() {
    const divElement = document.querySelector('div');
    divElement.addEventListener('click', (e) => {
        if(e.target.className === 'details') {
            const dialog = document.createElement('dialog');
            dialog.classList.add('rand-dialog');
            dialog.innerHTML += `
            <p>${e.target.dataset.description}</p>
            <form method="dialog">
            <button>OK</button>
            </form>
            `;
            content.appendChild(dialog);
            dialog.showModal();
          }
    });
}
showDetails();