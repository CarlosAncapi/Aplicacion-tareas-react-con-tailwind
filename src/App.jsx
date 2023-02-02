
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = [
  {id:1, title: "completar los cursos de react", completed: true},
  {id:2, title: "ejercitar el cuerpo", completed: false},
  {id:3, title: "comer menos", completed: false},
  {id:4, title: "meditar 20 minutos", completed: false},
  {id:5, title: "completar deafio TODO front end mentor", completed: false},
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

  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>

        <TodoList todos={todos}/>

        <TodoComputed />

        <TodoFilter/>
      </main>


      <p className="text-center mt-8">Presiona y arrastra las tareas para ordenar la lista</p>
    </div>
  )};

export default App;
