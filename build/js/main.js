"use strict";
// const nameValue : string = "chinedu";
// console.log(nameValue);
//? Non-null !;
const form = document.querySelector(".todo");
const btn = document.getElementsByClassName("btn")[0];
const input = document.querySelector(".input");
const ulContainer = document.querySelector('#todolist');
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    console.log(JSON.parse(todosJSON));
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodoInterFace = {
        text: input.value,
        completed: false,
    };
    if (input.value === '') {
        createTodo(newTodoInterFace);
        todos.push(newTodoInterFace);
        saveTodos();
    }
    else {
        alert("Please enter a value");
    }
    console.log(todos);
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
        console.log(todos);
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    ulContainer.appendChild(newLi);
}
form.addEventListener("submit", handleSubmit);
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("form submitted")
// })
// btn.addEventListener("click", ()=>{
//     console.log("button clicked");
//     const valueInput = input.value;
//     console.log(valueInput)
// })
// form.addEventListener("submit", (e)=>{
//     // e.preventDefault();
//     console.log("form submitted")
// })
// input.addEventListener("", ()=>{
//     const valueInput = input.value;
//     console.log(valueInput)
// })
