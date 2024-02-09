import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message'
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '@/firebase';

export const Chatbox = () => {

  const messageScroll = useRef();
  const [messages, setMessages]: any[] = useState([]);

  // const scrollToBottom = () => {
  // //   messageScroll.current.scrollIntoView({behavior: "smooth"})
  // // }

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      var messages: any[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
    });
    return unsubscribe
  })


  return (
    <div>
      {messages.map(message => (
        <Message key={message.id} txt={message.text} color={message.color} name={message.name} createdAt={message.createdAt} />
      ))}
    </div>
  )
}
