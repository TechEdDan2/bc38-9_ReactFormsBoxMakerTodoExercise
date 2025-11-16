import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    // Initialize State as an array of todos for initial setup then empty it.
    const INIT_STATE =
        [
            { id: uuid4(), text: "create todo app", completed: false },
            { id: uuid4(), text: "celebrate", completed: false }
        ];


    const [todos, setTodos] = useState(INIT_STATE);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid4() }]);
    };

    const removeTodo = (id) => {
        setTodos(todos => todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, text, completed }) => (
                    <Todo
                        todo={{ id, text, completed }}
                        key={id}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />))
                }
            </div>
        </>
    )

};

export default TodoList;
