<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Todo;

class VueController extends Controller
{
    public function insertion(Request $request){
        //Insertion de la tache
        Todo::create([
            'task' => $request->input('tache')
        ]);
        return response()->json([
            "message" => "Insertion reussie avec sucess"
        ]);
    }

    public function afficher(){
        //Retourner les taches
        return Todo::all();
    }

    public function getting(Request $req){
        $task = Todo::find( (int) $req->id);
        if (!$task) {
            return response()->json([
                "message" => "Task Not Found"
            ]);
        }
        return $task;
    }

    public function updateTask(Request $req){
        $tache = Todo::find( (int) $req->id);
        $tache->task = $req->input('tache');
        $tache->save();
    }

    public function supprimer(Request $request){
        $task = Todo::find( (int) $request->id);
        $task->delete();
        return redirect('http://localhost:3001/');
    }
}
