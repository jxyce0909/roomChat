import React from 'react'
import { useRouter } from 'next/router';

export const Navbar = () => {

    const router = useRouter();
  
    const handleHomePage = (e: any) => {
      e.preventDefault()
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
