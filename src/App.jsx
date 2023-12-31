import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filteredHandler = () => {
        switch (status) {
            case "complated":
                setFilteredTodos(
                    todos.filter((todo) => todo.complated === true)
                );
                break;
            case "uncomplated":
                setFilteredTodos(
                    todos.filter((todo) => todo.complated === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    useEffect(() => {
        filteredHandler(todos);
    }, [todos, status]);

    return (
        <>
            <div className="container">
                <header>
                    <h1>TODO LIST</h1>
                </header>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <ToDoList
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />
            </div>
        </>
    );
}

export default App;
