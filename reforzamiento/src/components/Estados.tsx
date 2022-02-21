import { useEffect } from "react";
import HookEstado from "../hooks/Estados";

export default function Estados() {

    const {activo, activar, inactivar} = HookEstado();   
   

    useEffect(() => {
      if(activo) console.log("Hola Mundo");
      else console.log("Adios Mundo");
    }, [activo])
    
  return (
    <div>
        <button className="btn btn-primary" onClick={activar}>Activo</button>
        <button className="btn btn-danger" onClick={inactivar}>Inactivo</button>
        {activo?"Activo":"Inactivo"}
    </div>
  )
}
