import React from 'react';
import { Chatbox } from '@/components/Chatbox';
import { SendMessage } from '@/components/SendMessage';

const chat = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className='w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl'>
            <Chatbox/>
            <SendMessage/>
        </div>
    </div>
  )
}

export default chat