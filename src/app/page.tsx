"use client"
import { useEffect, useState } from "react";


interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 2,
      title: 'Todo 2',
      description: 'This is todo 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'This is todo 3',
      completed: false,
    },
  ],
};

export default async function Home() {
  

  const [todos, setTodos] = useState<TodoState>(initialState);

  useEffect(()=>{
    async function getData() {
      const response = await fetch("https://sum-server.100xdevs.com/todos");
      const data = await response.json();
      setTodos(data);
    }
    getData();
  },[])
  
  return (
    <div>
      {todos.todos.map((todo:any)=><div key={todo.id}>
        {todo.title}
        {todo.description}
      </div>)}
    </div>
  );
}

//this is client side rendering : doesn't utilise the benefits that nextjs provides