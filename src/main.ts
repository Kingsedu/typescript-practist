// const nameValue : string = "chinedu";
// console.log(nameValue);

// const ageValue : number = 25;
// const ageRange : number = 30;

// console.log(ageValue + ageRange);
// type Person ={
//     name: string;
//     age: number
// }

// const personValue = (person: Person) =>{
//     return `Person: ${person.name}, Age: ${person.age}`;
// }
// console.log(personValue({name: "needy", age: 34}))

// console.log("seems here");


interface Todo{
    text: string;
    completed: boolean;
}

//? Non-null !;
const form = document.querySelector(".todo") as HTMLFormElement;
const btn = document.getElementsByClassName("btn")[0] as HTMLButtonElement;
const input = document.querySelector(".input") as HTMLInputElement;
const ulContainer = document.querySelector('#todolist') as HTMLUListElement;
const todos: Todo[] = readTodos();
todos.forEach(createTodo)

function readTodos(){
const todosJSON = localStorage.getItem("todos");
if(todosJSON === null) return [];
console.log(JSON.parse(todosJSON));
return JSON.parse(todosJSON);
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    const newTodoInterFace : Todo = {
        text: input.value,
        completed: false,
    }
    if(input.value === ''){
    createTodo(newTodoInterFace)
    todos.push(newTodoInterFace);
    saveTodos()
    }else{
        alert("Please enter a value")
    }
    console.log(todos)
    input.value = "";
}
function createTodo(todo: Todo){
    const newLi  = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
     checkbox.checked = todo.completed;
    checkbox.addEventListener("change", ()=>{
        todo.completed = checkbox.checked;
        saveTodos();
        console.log(todos)
    })
    newLi.append(todo.text);
    newLi.append(checkbox);
    ulContainer.appendChild(newLi);

}
form.addEventListener("submit", handleSubmit)




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