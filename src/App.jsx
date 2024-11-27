import { useEffect, useState } from "react"
import AffichageTodo from "./components/AffichageTodo"
import FormAdd from "./components/formAdd"


function App() {
  const [taches, setTaches] = useState([]);

 //Methode pour Ajouter une tache
 const handleAddTache = (newTache) => {
     const prev = [...taches, newTache];

     localStorage.setItem("taches",JSON.stringify(prev));
     setTaches(prev);
 }   

 useEffect(()=>{
    const tacheLocal = JSON.parse(localStorage.getItem("taches"));
    setTaches(tacheLocal);
 },[])

  return (
    <div className="flex flex-col pt-4">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl w-full text-center">Todolist</h1>
        <FormAdd AddTaches={handleAddTache} />
      </div>
      <div className="flex flex-col items-center pt-6">
        <h1 className="pb-5 text-2xl">Listes des taches</h1>
        <AffichageTodo taches={taches}/>
      </div>
    </div>
  )
}

export default App
