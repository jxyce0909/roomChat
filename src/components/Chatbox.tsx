import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase';

export const Chatbox = () => {
  const [msges, setMsges] = useState('');
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

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      var messages: any[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
        // console.log(doc.data());
      });
      console.log(messages)
    });
    return unsubscribe
  })
  return (
    <div>
      {messages.map(message => (
        <Message key={message.id} txt={message.text} name={message.name} />
      ))}
    </div>
  )
}
