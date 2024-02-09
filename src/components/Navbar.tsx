import React from 'react'
import { useRouter } from 'next/router';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase';
import firebase from 'firebase/compat/app';
import { useSearchParams } from 'next/navigation';

export const Navbar = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
  
    const handleHomePage = async(e: any) => {
      e.preventDefault()
      // try {
      //   //delete message data from the current user + delete current user
      //   const userId = await firebase.firestore().collection("users")

      //   if(userId){
      //     await firebase.firestore().collection("users").doc(userId.id).delete()
      //   }
      // } catch (error) {
        
      // }
      router.push('/')
    }

  return (
    <div className="navbar bg-gray-700">
        <div className="flex-1">
            <a className="pl-4 font-semibold text-xl">PicOrChat</a>
        </div>
        <div className="flex-none" onClick={handleHomePage}>
            <ul className="menu menu-horizontal px-1">
            <li><a>Exit</a></li>
            </ul>
        </div>
    </div>
  )
}
