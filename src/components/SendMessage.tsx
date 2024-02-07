import React, { useState } from 'react'
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '@/firebase';
import { useSearchParams } from 'next/navigation';

export const SendMessage = (props: any) => {

    const searchParams = useSearchParams();
    const [text, setText] = useState("")

    const submitHandler = async(e: any) => {
        e.preventDefault()
        if(text.trim() == ""){
          alert("Enter Message")
          return;
        }
        try {
          await addDoc(collection(db, "messages"), {
            text: text,
            name: searchParams.get("name"),
            color: searchParams.get("color"),
            createdAt: serverTimestamp()
          })
        }catch {
          console.log('error')
        }
        setText("");
    }

  return (
    <div className='bottom-0 w-full '>
        <form onSubmit={submitHandler} className='px-2 pb-4 flex'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}className='input w-full focus:outline-none bg-gray-200 rounded-r-none'/>
            <button type="submit" className='w-auto bg-gray-200 rounded-r-lg pr-4 pl-4 divide-solid hover:bg-gray-400 transition duration-150'>Send</button>
        </form>
    </div>
  )
}
