import React from 'react';
import { Chatbox } from '@/components/Chatbox';
import { SendMessage } from '@/components/SendMessage';
import { Navbar } from '@/components/Navbar';

const chat = () => {
  return (
    <main className='main'>
      <div className='text align-top'>
        <Navbar/>
        <div className="card lg:card-side bg-white shadow-xl">
          <div className='flex flex-col w-full'>
            <div className='card-body'>
                <Chatbox/>
            </div>
            <div className='sticky bottom-0'>
              <div className="divider"></div> 
              <div>
                <SendMessage/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default chat