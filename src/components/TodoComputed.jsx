const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="dark:bg-gray-800 duration-1000 flex justify-between rounded-b-md bg-white py-4 px-4">
            <span className="text-gray-400">{computedItemsLeft} Tareas por hacer</span>
            <button 
                className="text-gray-400"
                onClick={clearCompleted}
            >
            Eliminar terminadas
            </button>
        </section>
    );
};

export default TodoComputed;