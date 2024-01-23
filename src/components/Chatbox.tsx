import React from 'react'
import { Message } from './Message'

export const Chatbox = () => {

  const messages = [{
    id: 1,
    text: "Hello Eric!",
    name: "ezcatch13"
  },
  {
    id: 2,
    text: "Hello Joyce!!",
    name: "jskf12"
  }
]
  return (
    <div>
      {messages.map(message => (
        <Message key={message.id} txt={message.text} name={message.name}/>
      ))}
    </div>
  )
}
