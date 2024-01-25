import React, { useEffect } from 'react'
import { Message } from './Message'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase';

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

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // msges.push(doc.data().name);
        console.log(doc.data());
      });

    });
  })
  return (
    <div>
      {messages.map(message => (
        <Message key={message.id} txt={message.text} name={message.name} />
      ))}
    </div>
  )
}
