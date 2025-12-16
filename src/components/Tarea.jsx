import './css/tarea.css'

export const Tarea = ({ infoTarea ,cambio ,eliminar}) => {
    const id = infoTarea.id
    const estado = infoTarea.done
    const handleCambiar = () => {
        cambio(id, estado);
    }
    const handleEliminar = () => {
        eliminar(id);
    }
    let claseTarjeta;
    let claseBoton;
    let textoBoton;
    //trabajo creando clases de manera dinamica para cambiar el estado de la tarjeta y el boton
    if (estado === true) {
        claseTarjeta = 'finalizada';
        claseBoton = 'finalizada';
        textoBoton = 'Finalizada';
    } else {
        claseTarjeta = 'pendiente';
        claseBoton = 'pendiente';
        textoBoton = 'Pendiente';
    }

    return (
        <div className={`tarjeta ${claseTarjeta}`}>
            <div>
                <p className="titulo">{infoTarea.titulo}</p>
                <p className="descripcion">{infoTarea.descripcion}</p>
            </div>

            <div className="acciones">
                <button className={`btn-cambio ${claseBoton}`} onClick={handleCambiar}>
                    {textoBoton}
                </button>
                <button className="btn-eliminar" onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
