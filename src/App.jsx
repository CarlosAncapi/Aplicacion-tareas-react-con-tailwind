const App = () => {
  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.2em]
            text-white">Tareas</h1>
          <button>luna</button>
        </div>
        <form className="mt-8 flex items-center gap-4 rounded-md overflow-hidden bg-white border   
          py-4 px-4 ">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
          <input 
            className="w-full text-gray-400 outline-none"
            type="text" 
            placeholder="Crea una nueva Tarea..."/>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4">
          <article className="">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">Completar el curso online de java</p>
            <button> la (x)</button>
          </article>
          <article className="">
            <button>Circulo</button>
            <p>Completar el curso online de java</p>
            <button> la (x)</button>
          </article>
          <article className="">
            <button>Circulo</button>
            <p>Completar el curso online de java</p>
            <button> la (x)</button>
          </article>
          <section>
            <span>5 item por completar</span>
            <button>Eliminar tareas completadas</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <button>Todas</button>
        <button>Pendientes</button>
        <button>Completadas</button>
      </section>

      <p className="text-center">presiona y arrastra las tareas para ordenar la lista</p>
    </div>
  )};

export default App;