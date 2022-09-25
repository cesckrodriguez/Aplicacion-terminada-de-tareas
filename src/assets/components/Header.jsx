import Button from "./Button"


const Header = ({onAdd, mostrarTexto}) => {

  return (
    <div className="header">
        <h1>Tareas</h1>
        <Button texto={mostrarTexto ? "Ocultar Formulario" : "Agregar Tarea"} color={mostrarTexto ? "red" : "green"} onClick={onAdd} />
    </div>
  )
}

export default Header