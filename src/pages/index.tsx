import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { nanoid } from "nanoid";
import { PiArrowClockwiseLight } from "react-icons/pi";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";


export default function Home() {

  const [name, setName] = useState("")
  const [color, setColor] = useColor("#123123");

  useEffect(() => {
    setName(nanoid(7));
  }, []);

  return (
    <main className=''>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">Room Chat</h1>
          <form className="mt-6">
            <div className="mb-4">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />

              {name.length < 7 && (
                <p className="text-red-300 text-sm">
                  Display name must be at least 7 characters long
                </p>
            )}

              <div className="flex flex-row items-center mt-2">
              <PiArrowClockwiseLight
                size={20}
                className="transition duration-300 transform hover:rotate-180 cursor-pointer text-3xl mr-2 ml-2"
                onClick={() => setName(nanoid(7))}
              />
              <p className="text-gray-600">reset display name</p>
            </div>
            </div>
            <div className="mb-2"/>
            <label className="block text-sm font-semibold text-gray-800">
              Avatar
            </label>
            <div className='flex justify md-4'>
              <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
            </div>


            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                View Rooms
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
