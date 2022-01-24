import React from 'react';

const Tarea = () => {
    const [task, setTask] = React.useState("");
    const [BD_Tareas, setBD_Tareas] = React.useState([]);

    const agregarTarea = e => {
        e.preventDefault() //esto evita que recarge la pagina
        console.log(task);

        if (setTask.length === 0) {
            console.log('la matriz de datos esta vacia');
            return
        }
        /*setBD_Tareas.push(...BD_Tareas, task)*/
        setBD_Tareas([
            ...BD_Tareas,
            { id: (Math.random() * (1000 - 1) + 1), NuevaTarea: task }
        ])
        //setTask('')
        console.log(task);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <ul className="list-group">

                        {BD_Tareas.map(item => (
                            <li key={item.id}>
                                <>{item.NuevaTarea}</>
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
        </div >
    )
};

export default Tarea;
