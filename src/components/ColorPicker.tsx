import {SetStateAction, useState} from 'react'

export const ColorPicker = () => {
    const [color, setColor] = useState("#808080");

    const colorChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setColor(event.target.value);
    }
  return (
    <div className="color-picker-container">
        <input type="color" value={color} onChange={colorChange}/>
    </div>
  )
}