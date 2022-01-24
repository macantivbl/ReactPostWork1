import React from 'react';

const Tarea = () => {
    const [task, setTask] = React.useState("");
    const [BD_Tareas, setBD_Tareas] = React.useState(['']);

    const agregarTarea = e => {
        console.log(task);

        if (setTask.length === 0) {
            console.log('la matriz de datos esta vacia');
            return
        }
        setBD_Tareas.push(...BD_Tareas, task)

        setTask('')

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <ul className="list-group">

                        {BD_Tareas.map(printTarea => (
                            <li className="list-group-item list-group-item-warning">
                                {printTarea}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="col-4">
                <h4 className="text-center">
                </h4>
                <form onSubmit={agregarTarea}>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Ingrese Tarea"
                        onChange={e => setTask(e.target.value)}
                        value={task}
                    />

                    <button className="btn btn-dark btn-block" type="submit">Agregar Tarea</button>

                </form>
            </div>
        </div>
    )
};

export default Tarea;
