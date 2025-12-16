import { useEffect, useReducer } from "react"
import { reduceTareas } from "../reducer/reduceTareas"

const init = () => {
    const info = localStorage.getItem("Tareas");
    return info ? JSON.parse(info) : [];
};

export const crudTareas = () => {
    const [state, dispatch] = useReducer(reduceTareas, [], init);

    useEffect(() => {
        localStorage.setItem("Tareas", JSON.stringify(state));
    }, [state]);

    const addTarea = (newTarea) =>{
        const accion = {
            type: 'add',
            payload: newTarea
        }
        dispatch(accion)
    }
    const toogle = (id, estado) =>{
        //console.log('toggle id',id)
        //console.log('estado', estado)
        const cambio = {
            id: id,
            //el ! invierte el booleado de true a false y de false a true
            done: !estado
        }
        //console.log('cambio de estado',cambio);
        const accion ={
            type: 'toggle',
            payload: cambio
        }
        dispatch(accion)
    }

    const borrar = (id) =>{
        //console.log('borrar id',id)
        const accion ={
            type: 'delete',
            payload: id
        }
        dispatch(accion)
    }

  return {
    state,
    addTarea,
    toogle,
    borrar
  }
}
