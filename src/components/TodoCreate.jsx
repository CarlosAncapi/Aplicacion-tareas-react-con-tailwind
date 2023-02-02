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
            className="dark:bg-gray-800 mt-8 flex items-center gap-4 overflow-hidden rounded-md border bg-white   
                py-4 px-4 "
        >
            <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
            <input
                className="dark:bg-gray-800  w-full text-gray-400 outline-none"
                type="text"
                placeholder="Crea una nueva Tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
