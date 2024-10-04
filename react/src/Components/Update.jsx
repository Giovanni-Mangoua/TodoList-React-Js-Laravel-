import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Modifier(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [Form,setForm] = useState({tache:''})

    const Return = () => {
        navigate('/')
    }

    useEffect( () => {
        SearchTask()
    }, [id]);

    const SearchTask = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/get/task/"+id)
            setForm(response.data)
        } catch (error) {
            console.error("Impossible")
        }
    }

    const HandlerInput = (e) => {
        setForm({...Form,[e.target.name]:e.target.value})
        console.log(JSON.stringify(Form))
    }

    const HandlerModify = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/update/"+id,Form)
            console.log(response.data)
        } catch (error) {
            console.error("Something Error")
        }
    }

    return<>
    <div className="col-lg-offset-3 col-lg-4 col-xs-12">
        <form>
            <div className="form-group">
                <label htmlFor="tache">Tache: </label>
                <input type="text" name="tache" id="tache" className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={HandlerModify}>Modifier</button>
                <button className="btn btn-info" onClick={Return}>Back To Home</button>
            </div>
        </form>
    </div>
    </>
}