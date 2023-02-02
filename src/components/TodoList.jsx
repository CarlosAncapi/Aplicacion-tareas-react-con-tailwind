import TodoIitem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">

            {todos.map((todo) => (
                <TodoIitem key={todo.id} todo={todo} />
            ))}

        </div>
    );
};

export default TodoList;