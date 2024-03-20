let todolist = [];

let input = document.querySelector("#input");

let list = document.querySelector("#todolist");

document.querySelector("#button").onclick = submit;

function submit() {
  todolist.push(input.value);

  console.log(todolist);
  showlist();

  input.value = "";
}

console.log(todolist)

function showlist() {
  list.innerHTML = " ";

  console.log(todolist)

  const show = todolist.map((ele, ind) => {
    return `<li>${ele}
    <div class="button"> <span onclick="editTodo(${ind})">edit</span> | <span onclick="deleteTodo(${ind})" >delete</span></div></li>`;
  });
  list.innerHTML=show.join("")
}
showlist()

function deleteTodo(ind) {
  todolist.splice(ind, 1);

  showlist();
}

function editTodo(ind) {
  let editedValue = prompt("Please enter your new value");

  todolist.splice(ind, 1, editedValue);

  showlist();
}
