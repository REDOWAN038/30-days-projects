const inputBox = document.querySelector(".input-box")
const addBtn = document.querySelector(".add-btn")
const taskLists = document.querySelector(".task-lists")

addBtn.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("you must write something")
    } else {
        let li = document.createElement("li")
        let span = document.createElement("span")
        li.innerHTML = inputBox.value
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        taskLists.appendChild(li)
        inputBox.value = ""
        setTodos()
    }
})

taskLists.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        setTodos()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        setTodos()
    }
})

function setTodos() {
    localStorage.setItem("todos", taskLists.innerHTML)
}

function getTodos() {
    taskLists.innerHTML = localStorage.getItem("todos")
}

getTodos()