import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { list } from './list'
const Dropdown = () => {

    const [open,setOpen] = useState(false)
  return (
    <>
      <div className='relative flex flex-col items-center w-[240px]
      h-[340px] rounded-lg'>
        <button onClick={()=>
        setOpen((prev) => !prev)} className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg
          rounded-lg tracking-wider border-2 border-transparent 
          active:border-white duration-300 active:text-white'>
              Dropdown 
              {
                !open?(
                    <AiOutlineCaretDown className='w-8' />
                ) : (
                    <AiOutlineCaretUp className='w-8' />
                )
              }
        </button>

        {open && (
            <div className='bg-blue-400 absolute top-20 rounded-lg p-2 w-full'>
                {
                    list.map((item, index)=>(
                        <div key={index} className='w-full hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg border-l-transparent hover:border-l-white border-l-2'>
                              <a href="#" className='text-xl'>{item.label}</a>
                        </div>
                    ))
                }
            </div>
        )}
      </div>
    </>
  )
}

export default Dropdown
