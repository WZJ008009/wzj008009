// 获取DOM元素
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 添加待办事项
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    // 创建列表项
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    // 构建列表项内容
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete-btn">删除</button>
    `;

    // 添加到列表
    todoList.appendChild(li);

    // 清空输入框
    todoInput.value = '';

    // 绑定事件
    const checkbox = li.querySelector('.todo-checkbox');
    const deleteBtn = li.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
}

// 绑定添加按钮点击事件
addBtn.addEventListener('click', addTodo);

// 绑定回车键事件
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});