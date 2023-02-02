import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            return setTitle("");
        }else{
            createTodo(title);
            setTitle("");
        };

    };


    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="dark:bg-gray-800 duration-1000 mt-8 flex items-center gap-4 overflow-hidden rounded-md border bg-white   
                py-4 px-4 dark:border-none"
        >
            <input
                className="dark:bg-gray-800 duration-1000 w-full text-gray-400 outline-none"
                type="text"
                placeholder="Crea una nueva Tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
