// khai bao va khoi tao 1 gia tri ten la "class" voi gia tri la "front-end32" vao localStorage.

// localStorage.setItem('class','front-end32');

// data la ten dat gi cung dc. Json.parse la chuyen doi localStorage.getItem('class') sang JSON. 

// const data = JSON.parse(localStorage.getItem('class'));

// const valueTodo = [
//     {
//         "text": "ăn cơm",
//         "completed": false
//     },
//     {
//         "text": "đạp xe",
//         "completed": false
//     },
//     {
//         "text": "làm bài",
//         "completed": false
//     }
// ]
// localStorage.setItem('todos', JSON.stringify(valueTodo));


// Bước 1 - truy cập phần tử ID form,input...  
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todosUl = document.querySelector("#todos");

// Bước 2 - lấy danh sách các công việc cũ đã lưu trong LocalStorage
const todos = JSON.parse(localStorage.getItem("todos"));
//  JSON.stringify là hàm biến chuỗi,mảng.. thành json .
//  JSON.parse là hàm chuyển về dữ liệu json.
// localStorage.setItem('todos',JSON.stringify(valueTodo));

// Bước 3 - kiểm tra danh sách công việc đã có chưa 
if (todos) {
    todos.forEach(function(todo){
        addTodo(todo);
    })
}
// Bước 3-1 : khi người dùng nhập thêm công việc mới ở form. Thì dùng addEventListener cho phần tử form.
// preventDefault là hàm ko load lại trang web
form.addEventListener('submit',function handleSubmit(e){
    e.preventDefault();
    addTodo()
    })
// Bước 4 - tạo 1 function add Todos . Để thêm , xóa các công việc, hiển thị ra ngoài cho người dùng.
//  input.value"" là reset lại ô input có value rỗng. để xóa tự động xóa chữ mình vừa nhập vào ô input. 
function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }
    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerHTML = todoText;
    todosUl.appendChild(todoEl)
    input.value = ""
    updateLs()
    }
}
// Bước 5 - lưu lại công việc , giá trị vừa thêm vào lại
// function updateLs để lưu lại chữ, công việc , giá trị người dùng nhập vào localStorage
function updateLs() {
    const todosEl = document.querySelectorAll('li')
    const todos = []
    todos.forEach(function (todoEl){
        const newList = {
            text : todoEl.innerText
        }
        todos.push(newList)
        
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}



