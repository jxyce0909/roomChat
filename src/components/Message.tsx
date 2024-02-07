import React from 'react'

export const Message = (props: any) => {

  const colorString = props.color.replace()

  return (
    <div>
        <div className="chat chat-start">
            <div className={`chat-header text-[props.]`}>
                {props.name}
            </div>
            <div className="chat-bubble bg-gray-300">{props.txt}</div>
            <div className="chat-footer opacity-50">
                {/* <time className="text-xs opacity-50">{props.trimCreated}</time> */}
            </div>
        </div>
    </div>
  )
}
