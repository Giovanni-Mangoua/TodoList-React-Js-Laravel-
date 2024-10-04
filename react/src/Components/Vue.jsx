import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Vue(){

    const {id} = useParams();
    const [task,setTask] = useState({})
    const navigate = useNavigate()

    const Return = () => {
        navigate('/')
    }

    useEffect( () => {
        SearchTask()
    }, [id]);

    const SearchTask = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/get/task/"+id)
            setTask(response.data)
        } catch (error) {
            console.error("Impossible")
        }
    }

    return <>
      <div className="row">
        <div className="col-lg-offset-3 col-lg-4 col-xs-12">
            <p>{task.id} : {task.task}</p>
            <button className="btn btn-primary" onClick={Return}>Back To Home</button>
        </div>
      </div>
    </>
}