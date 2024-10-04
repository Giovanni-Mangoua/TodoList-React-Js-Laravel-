import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export function List(){

    const [task,setTask] = useState([]);

    const HandlerInput = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/show/data")
            setTask([...result.data])
            console.log(task)
        } catch (error) {
            console.error("Donnees non recues");
        }
    }

    useEffect( () =>{
        HandlerInput()
    }, [])

    var rows = []

    task.map( (item) => {
        rows.push(<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.task}</td>
            <td>
            <Link to={`/vue/${item.id}`} className="btn btn-success">Voir</Link>
            <Link to={`/update/${+item.id}`} className="btn btn-warning">Modifier</Link>
            <a href={"http://127.0.0.1:8000/api/delete/"+item.id} className="btn btn-danger">Supprimer</a>
            </td>
        </tr>)
    })

    return <>
      <table className="table table-striped">
            <thead>
                <tr>
                    <td>N`</td>
                    <td>Taches</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
     </table>
    </>
}