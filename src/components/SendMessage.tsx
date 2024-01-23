import React, { useState } from 'react'

export const SendMessage = () => {

    const [text, setText] = useState("")

    const handleMessage = (e: any) => {
        e.preventDefault()
        console.log(text)
        setText("")
    }

  return (
    <div className='bottom-0 w-full '>
        <form onSubmit={handleMessage} className='px-2 pb-4 flex'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}className='input w-full focus:outline-none bg-gray-200 rounded-r-none'/>
            <button type="submit" className='w-auto bg-gray-200 rounded-r-lg pr-4 pl-4 divide-solid hover:bg-gray-400 transition duration-150'>Send</button>
        </form>
    </div>
  )
}
