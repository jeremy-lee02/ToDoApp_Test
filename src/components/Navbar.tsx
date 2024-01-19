"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const Header = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=> {
        setIsMounted(true)
    },[])

    if(!isMounted) {
        return null
    }
    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <Link className='font-bold text-2xl hover:text-sky-500 hover:underline' href={'/'}>TODO APP</Link>
                <Link className=' p-2 border border-sky-500 rounded-md hover:bg-sky-500 hover:text-white hover:scale-[1.1] transition ease-in-out' href={'/create-new'}>Add New</Link>
            </div>
        </>
  )
}

export default Header