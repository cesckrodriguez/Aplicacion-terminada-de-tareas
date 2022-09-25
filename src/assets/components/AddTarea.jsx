import React from 'react'
import { useState } from 'react'

const AddTarea = ({onAdd}) => {
//para poder guardar los campos del formulario debemos crear tres estados, uno para cada campo
const [texto, setTexto] = useState("")
const [fecha, setFecha] = useState("")
const [terminado, setTerminado] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()
    if(!texto){
        alert("Ingresa una descripcion a la tarea");
        return
    }

    onAdd({texto, fecha, terminado})

    setTexto("");
    setFecha("");
    setTerminado(false);
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label >TAREA</label>
            <input 
                type="text"
                placeholder='Teclea una Tarea'
                value={texto} //debemos crear un value para linkearlo al event target para despues usarlo en el setTexto
                onChange={(e) => setTexto(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label >FECHA</label>
            <input 
                type="text" 
                placeholder='Teclea una Fecha'
                value={fecha}  //mientra tengamos este valor establecido no podremos escribir 
                onChange={(e) => setFecha(e.target.value)}
            />
        </div>
        <div className='form-control  form-control-check'>
            <label >TERMINADA</label>
            <input 
                type="checkbox"
                checked={terminado}
                value={terminado}
                onChange={(e) =>setTerminado(e.currentTarget.checked)}
                />
        </div>
        <input type="submit" value="Guardar" className='btn btn-block'/>
    </form>
  )
}

export default AddTarea