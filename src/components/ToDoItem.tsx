import { Checkbox } from '@mui/material'
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type Props = {
    id: string
    name:string,
    desc: string,
    completed: boolean,
    handleDelete: (id:string) => void,
    handleChange: (e: any, id:string) => void
}

const ToDoItem = ({id,name,desc,completed,handleChange,handleDelete}: Props) => {
    return (
        <>
            <div className='flex justify-between items-center py-3'>
                <div className="flex items-start">
                <div>
                    <Checkbox checked = {completed} onChange={(e: any) => handleChange(e, id) } />
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>{name}</h1>
                    <p>{desc}</p>
                </div>
                </div>
                <div className="mr-3 cursor-pointer" onClick={()=> handleDelete(id)}>
                <DeleteOutlinedIcon color="warning" className="hover:scale-110 transition ease-in-out" />
                </div>
            </div>
            <div className='border border-gray-400 w-full'></div>
        </>
    )
}

export default ToDoItem