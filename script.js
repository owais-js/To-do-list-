var currenteditItem;

function addItem() {
    var inputElement = document.getElementById('input');
    var ulElement = document.getElementById('list');

    if (inputElement.value.trim() === "") {
        alert("Please enter an item.");
        return;
    }

    var liElement = document.createElement('li');
    var editbtn = '<button onclick="editItem(event)">Edit</button>';
    var deletebtn = '<button onclick="deleteItem(event)">Delete</button>';

    liElement.innerHTML = '<span>' + inputElement.value + '</span>' + editbtn + deletebtn;

    ulElement.append(liElement);
    cls();
}

function deleteItem(event) {
    var liElement = event.target.parentElement;
    liElement.remove();
}

function editItem(event) {
    var inputElement = document.getElementById('input');
    var textElement = event.target.previousSibling;

    currenteditItem = textElement;
    inputElement.value = textElement.innerHTML;

    document.getElementById('Add-btn').classList.add('hide');
    document.getElementById('update-btn').classList.remove('hide');
}

function updatebtnFunction() {
    var inputElement = document.getElementById('input');
    currenteditItem.innerHTML = inputElement.value;

    cls();

    document.getElementById('Add-btn').classList.remove('hide');
    document.getElementById('update-btn').classList.add('hide');
}

function delall() {
    var ulElement = document.getElementById('list');
    ulElement.innerHTML = '';
}

function cls() {
    document.getElementById('input').value = '';
}
