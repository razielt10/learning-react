import React, { useEffect , useState } from 'react'

const Message = () => {

    const [coords, setCoords ] =  useState({x:0, y:0})
    useEffect( () => {
        const onMouseMove = ({x,y}) => {
            setCoords({x,y})
        }
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)

        }
    }, [])
  return (
    <>
      <h6>Ese nombre de usuario ya está siendo utilizado</h6>
      <div>Coords x:{coords.x}, y: {coords.y}</div>
    </>
  )
}

export default Message
