import Header from "./assets/components/Header"
import { useState } from "react"
import Tareas from "./assets/components/Tareas"
import AddTarea from "./assets/components/AddTarea"

function App() {
  const [mostrarform ,setMostrarForm] = useState(true)//creamos un estado para mostrar el formulario en caso de clickear "agregar"
  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: "ir al cine",
        fecha: "02 de febrero",
        terminado: true,
    },
    {
        id: 2,
        texto: "Comprar en el supermercado",
        fecha: "10 de febrero",
        terminado: false,
    },
    {
        id: 3,
        texto: "Hacer una app en React",
        fecha: "11 de febrero",
        terminado: false,
    }
])

//borrar tareas
const borrarTareas = (id) =>{
  console.log("tarea " + id + " borrada")
  setTareas(tareas.filter((tarea)=> tarea.id !==id));
}

//terminar tareas
const terminarTareas = (id) =>{
  console.log("Tarea terminada: "+id)
  setTareas(tareas.map((tarea)=> tarea.id === id ? {...tarea, terminado: !tarea.terminado}: tarea))
}

//añadir tareas
const addTareas = (objetoTarea) =>{
  const id = Math.floor(Math.random() *10000 ) + 1 //creamos un numero aleatorio para asignarlo como id a nuestro nuevo objeto tarea
  const nuevaTarea = { id, ...objetoTarea } //creamos un objeto integrando el id y usando ...para hacer una copia del objeto creado
  setTareas([...tareas, nuevaTarea])//agregamos el objeto tarea al vector de tareas con la funcion setTareas
}

  return (
    //en la linea 51 header, creamos una funcion que va a cambiar el valor true a false a modo de mostrar el form y este se lo pasamos al boton de agregar como prop para modificar
   <div className="container">
    <Header onAdd={()=> setMostrarForm(!mostrarform)} mostrarTexto={mostrarform} /> 
     {mostrarform  && <AddTarea onAdd={addTareas} />}   
     {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTareas} onToggle={terminarTareas} />: "No existen tareas para mostrar"} 
   </div>
  )
}

export default App
