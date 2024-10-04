import { useState } from "react";
import axios from "axios";
import { List } from "./Todo";

export function Home(){

    const [Form,setForm] = useState({tache:''})
    const [error,setError] = useState({})

    const HandlerInput = (e) => {
        setForm({...Form,[e.target.name]:e.target.value})
    }

    const ValidateForm = (values) => {
        const error = {}
        if (values.tache === "") {
            error.tache = "Veuillez inserer une tache"
        }
        return error
    }

    const HandlerValidateAndSubmit = async (e) => {
        e.preventDefault();
        setError(ValidateForm(Form))
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/store/data",Form)
            console.log(response.data)
        } catch (error) {
            console.error("Something Error")
        }
    }

    return <>
       <h3>Todo List CRUD</h3>
       <div className="conatiner">
        <div className="row">
            <div className="col-lg-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-5 col-xs-12">
                        <form>
                            <div className={"form-group"+ error.tache && "has-feedback has-error"}>
                                <label htmlFor="tache">Tache: </label>
                                <input type="text" name="tache" id="tache" className="form-control" placeholder="Entrez la tache ...."
                                onChange={HandlerInput} />
                                {error.tache && <><span className="glyphicon glyphicon-remove form-control-feedback">
                                    </span><span className="help-block">{error.tache}</span></>}
                            </div><br/>
                            <div className="form-group">
                                <button className="btn btn-success btn-block" onClick={HandlerValidateAndSubmit}>Enregistrer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-offset-1 col-lg-6 col-xs-12">
                        <List />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
}