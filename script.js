const input_task = document.getElementById('input_task');
const add_item = document.getElementById('add_item');
const tasks = document.getElementById('tasks');
const clear = document.getElementById('clear_tasks');
let id = 1;
let todo_list = [];

if(localStorage.getItem('todo') != undefined){
    todo_list = JSON.parse(localStorage.getItem('todo'));
    out_tasks();
}

add_item.addEventListener('click', ()=>{
    const task = input_task.value;
    todo_list.push({
        name : task,
        id : id
    });
    out_tasks();
    id++;
    input_task.value = '';
    localStorage.setItem('todo', JSON.stringify(todo_list));
});

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

function out_tasks() {
    let out = '';
    for(let key in todo_list){
        out+= todo_list[key].name + '<br>';
    }
    tasks.innerHTML = out;
}
