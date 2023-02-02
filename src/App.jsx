
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />

        <TodoList />

        <TodoComputed />

        <TodoFilter/>
      </main>


      <p className="text-center mt-8">Presiona y arrastra las tareas para ordenar la lista</p>
    </div>
  )};

export default App;
