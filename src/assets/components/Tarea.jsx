import React from 'react'
import {FaTimes} from "react-icons/Fa"

const Tarea = ({tarea, onDelete, onToggle}) => {
  return (
    <div className={`tarea ${tarea.terminado ? "terminada" : ""}`} onClick={()=> onToggle(tarea.id)}>
        <h3>{tarea.texto} <FaTimes style={{color: "red", cursor:"pointer"}} onClick={()=>onDelete(tarea.id)} /></h3> 
        <p>{tarea.fecha} </p>
    </div>
  )
}

export default Tarea