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
            <div className='flex justify-between items-center md:py-5 md:px-10 p-4'>
                <Link className='font-bold text-2xl hover:text-sky-500 hover:underline' href={'/'}>TODO APP</Link>
                <Link className=' hover:text-sky-500 hover:scale-[1.1] transition ease-in-out' href={'/create-new'}>Add New</Link>
            </div>
        </>
  )
}

export default Header