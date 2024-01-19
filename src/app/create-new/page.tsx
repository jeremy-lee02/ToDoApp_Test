"use client"
import { TODOLIST } from '@/libs/defaultData'
import { TODO } from '@/libs/todo.type'
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

type Props = {}

const CreateNewToDO = (props: Props) => {
  const router = useRouter()
  const taskNameRef = useRef<HTMLInputElement>(null)
  const taskDesc = useRef<HTMLTextAreaElement>(null)
  const [toDoList, setToDoList] = useState<TODO[] | []>([])

  useEffect(()=> {
    const todo = localStorage.getItem('todoList')
    if(todo) {
      setToDoList(JSON.parse(todo))
    }else {
      localStorage.setItem('todoList', JSON.stringify(TODOLIST))
    }
  },[])
  const handleSubmit = (e:any) => {
    e.preventDefault()
    if (taskNameRef.current?.value) {
      const newToDo: TODO = {
        id: uuidv4(),
        name: taskNameRef.current.value,
        desc: taskDesc.current?.value || "",
        completed: false,
      }
      setToDoList([...toDoList, newToDo])
      localStorage.setItem('todoList', JSON.stringify([...toDoList, newToDo]))
      router.push('/')
    }
  }
  console.log(toDoList)
  return (
    <div className='p-2 max-w-screen min-h-screen mt-10'>
      <div className=' p-2 rounded-md border border-gray-400 max-w-[60%] m-auto'>
        <h1 className='text-center font-semibold text-xl'>Create New ToDo</h1>
        <form className='my-5 ml-2 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor= 'taskName'>Task Name:</label>
            <input 
            required = {true}
            id='taskName'
            type='text'
            ref={taskNameRef}
            placeholder='Type task name'
            className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline' />
          </div>
          <div>
            <label htmlFor= 'desc'>Description:</label>
            <textarea 
            id='desc'
            ref = {taskDesc}  
            placeholder='Type Description here ...'
            className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline' />
          </div>
          <div className='flex justify-center items-center'>
            <button 
            className='px-4 m-auto py-1 rounded-md border border-blue-400 hover:text-white hover:bg-blue-400'
            type='submit'>
              Create
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNewToDO