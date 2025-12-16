
export const reduceTareas = (state, { type, payload }) => {
    switch (type) {
        case 'add':
            return [...state, payload];
        case 'toggle':
            return state.map(tarea => 
                //aqui tenemos, primero si el id de la tarea es igual al id del paylod, 
                // esparecemos la tarea y cambiamos el done sino dejamos la tarea igual
                tarea.id === payload.id ? { ...tarea, done: payload.done } : tarea
            );
        case 'delete':
            //filtra para separar todo menos el que tenga el id de ese payload
            const newState = state.filter(tarea => tarea.id != payload)
            return newState
        default:
            return state;
    }
}
