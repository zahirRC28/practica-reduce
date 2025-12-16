import { Tarea } from "./Tarea"
import './css/listTareas.css'

export const ListaTareas = ({ datos, cambiar, borrar}) => {
    //console.log(datos);    
    return (
        <div className="tareas-container">
            <h2>Tareas</h2>

            { datos.length !== 0 && datos.map(tarea => (
                <Tarea key={tarea.id}
                    infoTarea={tarea}
                    cambio = {cambiar}
                    eliminar = {borrar}
                />
            ))}
            { datos.length === 0 &&(
                <p>No hay tareas</p>
            )}
        </div>
  )
}
