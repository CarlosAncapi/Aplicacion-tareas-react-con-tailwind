import TodoIitem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">

            {todos.map((todo) => (
                <TodoIitem 
                    key={todo.id} 
                    todo={todo} 
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}

        </div>
    );
};

export default TodoList;