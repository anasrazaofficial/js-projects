let addTodo = document.getElementById('addTodo');
let input = document.getElementById('todo');
let todos = document.getElementById('todos');
let id = 1;
let add = true
let temp = ''

addTodo.addEventListener('click', () => {
    let todoMsg = input.value
    if (todoMsg.trim() === '') return
    if (add) {
        todos.innerHTML += `<div>
        <div>
            <input type='checkbox' id='todo${id}'>
            <label for='todo${id}'>${todoMsg}</label>
        </div>
        <div class="actionBtns">
            <button onclick='editTodo(todo${id})' id='editBtn'>Edit</button>
            <button onclick='deleteTodo(todo${id})' id='deleteBtn'>Delete</button>
        </div>
    </div>`
        id++
    } else {
        temp.innerText = input.value
        temp.parentElement.parentElement.style.filter = 'brightness(1)'
        toogleAbility(false)
        add = true
        addTodo.innerText = 'Add'
    }
    input.value = ''
})

function deleteTodo(i) {
    i.parentElement.parentElement.remove()
}

function editTodo(i) {
    temp = i.parentElement.lastElementChild
    input.value = temp.innerText
    i.parentElement.parentElement.style.filter = 'brightness(0.7)';
    addTodo.innerText = 'Edit'
    add = false
    toogleAbility(true)
}

function toogleAbility(val) {
    let editBtns = document.querySelectorAll('#editBtn')
    let deleteBtns = document.querySelectorAll('#deleteBtn')
    let checkboxes = document.querySelectorAll('.check')
    let tags = [...editBtns, ...deleteBtns, ...checkboxes]
    tags.forEach((el) => el.disabled = val)
}