import ToDo from "./ToDo";
import React from "react";

function ToDoList({ todos, setTodos, filteredTodos }) {
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <ToDo
                            text={todo.text}
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
