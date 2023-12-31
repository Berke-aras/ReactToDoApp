import { FaCirclePlus } from "react-icons/fa6";
import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, complated: false, id: Math.random() },
        ]);
        //üç nokta öperatörü elimizdeki verileri tutmamızı sağlıyor

        console.log(todos);

        setInputText("");
    };

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const statusHelper = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <form>
                <div className="search">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Add..."
                        onChange={inputTextHandler}
                        value={inputText}
                    />
                    <button
                        className="todo-button"
                        type="submit"
                        onClick={submitToDoHandler}
                    >
                        <FaCirclePlus />
                    </button>
                </div>

                <div className="select">
                    <select
                        name="todos"
                        className="filter-todo"
                        onChange={statusHelper}
                    >
                        <option value="all">All</option>
                        <option value="complated">Complated</option>
                        <option value="uncomplated">UnComplated</option>
                    </select>
                </div>
            </form>
        </>
    );
}

export default Form;
