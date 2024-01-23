import React from 'react'

export const Message = (props: any) => {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-header">
                {props.name}
            </div>
            <div className="chat-bubble bg-gray-300">{props.txt}</div>
            <div className="chat-footer opacity-50">
                <time className="text-xs opacity-50"> 2 hours ago</time>
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-header">
                {props.name}
            </div>
            <div className="chat-bubble bg-gray-300">{props.txt}</div>
            <div className="chat-footer opacity-50">
                <time className="text-xs opacity-50"> 2 hours ago</time>
            </div>
        </div>
    </div>
  )
}
