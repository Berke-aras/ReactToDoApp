import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function ToDo({ text, todos, setTodos, todo }) {
    const deleteHandler = () => {
        setTodos(todos.filter((eL) => eL.id !== todo.id));
    };

    const complateHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        complated: !item.complated,
                    };
                }
                return item;
            })
        );
    };

    return (
        <>
            <div className={` todo ${todo.complated ? "complated" : ""} `}>
                <button className="complate-btn" onClick={complateHandler}>
                    <FaCheckCircle />
                </button>
                <li className="todo-item"> {text} </li>
                <button className="trash-btn" onClick={deleteHandler}>
                    <FaTrash />
                </button>
            </div>
        </>
    );
}

export default ToDo;
