const TodoFilter = () => {
    return (
        <section className="container mx-auto mt-8 px-4">
            <div className="flex justify-center gap-10 rounded-md bg-white p-4">
                <button className="text-blue-600">Todas</button>
                <button className="hover:text-blue-600">Pendientes</button>
                <button className="hover:text-blue-600">Completadas</button>
            </div>
        </section>
    );
};

export default TodoFilter;