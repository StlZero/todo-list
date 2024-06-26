import "./styles/index.css";

function todo_add_HTML(div, title, desc, date) {
    div.innerHTML = `
    <div class="todo">
    <div class="todo-1">
        <p>${title}</p>
    </div>
    <div class="todo-2">
        <div class="details" data-description="${desc}">DETAILS</div>
        <div>${date}</div>
        <div id="edit-div">EDIT</div>
        <div id="delete-div">DELETE</div>
    </div>
    `;
}



function dialog_add_HTML(dialog, title, desc, date) {
    dialog.innerHTML = `
    <p>Greetings, one and all!</p>
    <form method="dialog" id="dialog-form">
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="${title}" required/>
    </div>

    <div>
        <label for="description">Description</label>
        <input type="text" name="description" id="description" value="${desc}"/>
    </div>

    <div>
        <label for="dueDate">Due date</label>
        <input type="number" name="dueDate" id="dueDate" value="${date}" required/>
    </div>

    <button type="submit" id="submit-button">Submit</button>
    </form>

    <button id="close-button">Close</button>
    `;
};



function rand_add_HTML(dialog, desc) {
    dialog.innerHTML = `
    <p>${desc}</p>
    <form method="dialog">
    <button>OK</button>
    </form>
    `;
}



function todosApp(element, title, desc, date) {
    // Create dialog
    const content = document.querySelector('#content');
    const dialog = document.createElement('dialog');
    dialog.classList.add('todoDialog');
    dialog_add_HTML(dialog, title, desc, date);
    content.appendChild(dialog);

    // Create description dialog
    const descDialog = document.createElement('dialog');
    descDialog.classList.add('rand-dialog');
    rand_add_HTML(descDialog, desc);
    content.appendChild(descDialog);

    element.addEventListener('click', (e) => {
        if (e.target.id == 'edit-div') {
            dialog.showModal();
        }

        if (e.target.id == 'delete-div') {
            dialog.remove();
            descDialog.remove();
            element.remove();
        }
        if (e.target.className == 'details') {
            descDialog.showModal();
        }
    });

    // Input values
    const title_input = dialog.querySelector('#title');
    const description_input = dialog.querySelector('#description');
    const due_date_input = dialog.querySelector('#dueDate');
    dialog.addEventListener('click', (e) => {
        // Submit form
        if (e.target.id == 'submit-button') {
            // Form validation
            if ((title_input.value != '') && (due_date_input.value != '')) {
                todo_add_HTML(element, title_input.value, description_input.value, due_date_input.value);
                rand_add_HTML(descDialog, description_input.value);

                dialog.close();
            }
        }
        // Close dialog
        if (e.target.id == 'close-button') {
            dialog.close();
        }
    });
}



function createDialog() {
    const content = document.querySelector('#content');
    const createButton = document.querySelector('.create');
    const list_contents = document.querySelector(".list-contents");

    // Create dialog
    const dialog = document.createElement('dialog');
    dialog.classList.add('todoDialog');
    dialog_add_HTML(dialog, '', '', '');
    content.appendChild(dialog);
    createButton.addEventListener('click', () => {
        dialog.showModal();
    });

    // Input values
    const title_input = document.getElementById('title');
    const description_input = document.getElementById('description');
    const due_date_input = document.getElementById('dueDate');

    dialog.addEventListener('click', (e) => {
        // Submit form
        if (e.target.id == 'submit-button') {
            // Form validation
            if ((title_input.value != '') && (due_date_input.value != '')) {
                let newDiv = document.createElement('div');
                todo_add_HTML(newDiv, title_input.value, description_input.value, due_date_input.value);
                list_contents.appendChild(newDiv);

                todosApp(newDiv, title_input.value, description_input.value, due_date_input.value);

                dialog.close();
                e.target.parentElement.reset();
            }
        }
        // Close dialog
        if (e.target.id == 'close-button') {
            dialog.close();
        }
    });
}
createDialog();