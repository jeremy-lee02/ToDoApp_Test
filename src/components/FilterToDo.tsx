import React from 'react'

type Props = {
    selectedFilter: string
    allTaskNum: number
    completedNum: number
    notCompletedNum: number
    onClick: (selectedFilter: string) => void
}

const FilterToDo = ({selectedFilter, allTaskNum,completedNum,notCompletedNum,onClick}: Props) => {
  return (
    <div className='flex items-center gap-4 mt-5'>
        <div 
        className={`cursor-pointer hover:text-blue-500 hover:underline ${selectedFilter === 'all-tasks' && "text-sky-500"}`} 
        onClick={() =>onClick("all-tasks")}>
            <p className='text-sm md:text-md'>All Tasks <span className='text-xs md:text-sm'>{`(${allTaskNum})`}</span></p>
        </div>
        <div 
        className={`cursor-pointer hover:text-blue-500 hover:underline ${selectedFilter === 'completed' && "text-sky-500"}`} 
        onClick={() =>onClick('completed')}>
            <p className='text-sm md:text-md'>Completed <span className='text-xs md:text-sm'>{`(${completedNum})`}</span></p>
        </div>
        <div 
        className={`cursor-pointer hover:text-blue-500 hover:underline ${selectedFilter === 'not-completed' && "text-sky-500"}`} 
        onClick={() =>onClick('not-completed')}>
            <p className='text-sm md:text-md'>Not Completed <span className='text-xs md:text-sm'>{`(${notCompletedNum})`}</span></p>
        </div>
    </div>
  )
}

export default FilterToDo