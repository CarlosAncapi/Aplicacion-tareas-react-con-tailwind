const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="dark:bg-gray-800  sflex justify-between rounded-b-md bg-white py-4 px-4">
            <span className="text-gray-400">{computedItemsLeft} Tareas por completar </span>
            <button 
                className="text-gray-400"
                onClick={clearCompleted}
            >
            Eliminar las finalizadas
            </button>
        </section>
    );
};

export default TodoComputed;