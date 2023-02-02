
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = [
  {id:1, title: "Completar los cursos de React", completed: true},
  {id:2, title: "Ejercitar con JavasScript", completed: false},
  {id:3, title: "Completar curso Tailwind CSS", completed: false},
  {id:4, title: "Empezar la creacion de portafolio web", completed: true},
  {id:5, title: "Postular a trabajos desarrollador ", completed: false},
]

const App = () => {

  const [todos,setTodos] = useState(initialState);

  const createTodo = (title) =>{
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed:false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map( todo => 
      todo.id === id 
        ? {...todo, completed: !todo.completed}
        :todo ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter)

  const filterTodos = () => {
    switch (filter) {

      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>

        <TodoList 
          todos={filterTodos()} 
          removeTodo={removeTodo} 
          updateTodo={updateTodo}
        />

        <TodoComputed 
          computedItemsLeft={computedItemsLeft} 
          clearCompleted={clearCompleted}
        />

        <TodoFilter 
          changeFilter={changeFilter}
          filter={filter}
        />
      </main>


      <p className="text-center mt-8">Presiona y arrastra las tareas para ordenar la lista</p>
    </div>
  )};

export default App;
