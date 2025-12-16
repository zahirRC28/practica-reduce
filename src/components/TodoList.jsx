import { Formulario } from "./Formulario"
import { crudTareas } from "../hooks/crudTareas";
import { ListaTareas } from "./ListaTareas";
import './css/todoList.css'

export const TodoList = () => {
    const { state, addTarea, toogle, borrar } = crudTareas();

  return (
    <>
        <h1>Lista de Tareas</h1>
        <Formulario crearTarea={addTarea}/>
        <ListaTareas datos = {state} cambiar ={toogle} borrar={borrar}/>
    </>
  )
}
