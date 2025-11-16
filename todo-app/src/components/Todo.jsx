import React from "react";

const Todo = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: '8px' }}
            />
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    flexGrow: 1,
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '8px' }}>
                Delete
            </button>
        </div>
    );
};

export default Todo;