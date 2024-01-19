"use client"

import FilterToDo from "@/components/FilterToDo";
import { TODOLIST } from "@/libs/defaultData";
import { TODO } from "@/libs/todo.type";
import { useEffect, useState } from "react";
import ToDoItem from "@/components/ToDoItem";


export default function Home() {
  
  const [filter, setFilter] = useState<string>("all-tasks")
  const [todoList, setToDoList] = useState<TODO[] | []>([])
  const [filteredToDo, setFilteredToDo] = useState<TODO[] | []>([])
  const handleFilter = (filter: string) => {
    setFilter(filter)
  }
  const handleChange = (e: any, id:string) => {
    const updateToDo : TODO[] = todoList.map(todo => {
      if(todo.id === id) {
        todo.completed = e.target.checked
      }
      return todo
    }) 
    setToDoList(updateToDo)
    setFilteredToDo(updateToDo)
    localStorage.setItem('todoList', JSON.stringify(updateToDo))

  }
  const handleDelete = (id: string) => {
    const updateTodo = todoList.filter(todo => todo.id !== id)
    setToDoList(updateTodo)
    setFilteredToDo(updateTodo)
    localStorage.setItem('todoList', JSON.stringify(updateTodo))
  }

  useEffect(()=> {
    const todo = localStorage.getItem('todoList')
    if(todo) {
      setToDoList(JSON.parse(todo))
    }else {
      localStorage.setItem('todoList', JSON.stringify(TODOLIST))
    }
  },[])

  useEffect(()=> {
    switch (filter) {
      case 'all-tasks':
        const allTodo = todoList
        setFilteredToDo(allTodo)
        break;
      case 'completed':
        const completedTodo = todoList.filter(todo => todo.completed === true)
        setFilteredToDo(completedTodo)
        break;
      case 'not-completed':
        const notCompletedTodo = todoList.filter(todo => todo.completed !== true)
        setFilteredToDo(notCompletedTodo)
        break;
    
      default:
        setFilteredToDo(todoList)
        break;
    }
  },[filter, todoList])

  return (
    <div className="p-2">
      <FilterToDo 
      selectedFilter= {filter}
      allTaskNum={todoList.length}
      completedNum={todoList.filter(item=> item.completed === true).length}
      notCompletedNum={todoList.filter(item=> item.completed !== true).length}
      onClick={handleFilter} />
      <div className='border border-gray-400 min-h-[50vh] mt-2'>
        {filteredToDo.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center text-center">No ToDo</div>
        ) : (
          <>
            {filteredToDo.map((todo:TODO) => (
                <ToDoItem 
                key={todo.id}
                id= {todo.id} 
                name= {todo.name} 
                desc= {todo.desc} 
                completed = {todo.completed} 
                handleChange={handleChange} 
                handleDelete={handleDelete}/>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
