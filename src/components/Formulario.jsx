import './css/formulario.css'

export const Formulario = ({crearTarea}) => {
    

    const handleSummit = (ev) =>{
        ev.preventDefault();
        const nomTarea = ev.target.nombreTarea.value;
        //console.log(nomTarea);
        const descrip = ev.target.descripcion.value;
        //console.log(descrip)
        if (!nomTarea.trim() || !descrip.trim()) {
            //Si estan vacios lo detiene para que no haga nada
            return;
        }

        const newTarea = {
            id: Date.now(),
            titulo: nomTarea,
            descripcion: descrip,
            done: false,
            date: new Date()
        }
        //console.log(newTarea);
        crearTarea(newTarea);

        ev.currentTarget.reset();
    }
    return (
        <>
            <div className="form-container">
                <h2>Añadir tarea</h2>
                <form onSubmit={handleSummit}>
                    <input type="text" name="nombreTarea" id="nombreTarea" placeholder="Cual es el nombre de tu tarea"/>
                    <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Aqui la descripcion de tu tarea"/>
                    <input type="submit" value="Añadir Tarea"/>
                </form>
            </div>
        </> 
    )
}
