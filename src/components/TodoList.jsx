import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoIitem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (

        <Droppable droppableId="tareas">
            {
                (droppableProvided) => (
                    <div 
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        className="mt-8 overflow-hidden rounded-t-md bg-white dark:bg-gray-800 [&>article]:p-4">

                        {todos.map((todo, index) => (
                            
                            <Draggable 
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {
                                    (draggableProvided) => (
                                        <TodoIitem 
                                            todo={todo} 
                                            removeTodo={removeTodo}
                                            updateTodo={updateTodo}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            {...draggableProvided.draggableProps}
                                        />
                                    )
                                }
                            </Draggable>
                        ))}

                        {droppableProvided.placeholder}
                    </div>
                )
            }

        </Droppable>
    );
};

export default TodoList;