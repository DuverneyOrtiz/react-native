


export default function DatosBasicos() {
    const name: string = "Duverney";
    const  edad :  number = 123;
    const estado: boolean = false;
    const lista: string[] = ["Duver", "Juan", "Pedro"];
    const usuario: Usuario = {
        name: "Duverney",
        lastName: "Ortiz",
        email: "duveney@gmail.com",
        address: {
            city: "Colombia",
            address: "Carrera 21 17 - 12"
        }
    }

    interface Usuario {
        name:     string;
        lastName: string;
        email:    string;
        address:  Address;
    }
    
    interface Address {
        city:    string;
        address: string;
    }

  return (
    <div>
        <div>
        {name} - { edad } - {estado?"Activo": "Inactivo"}
        <hr></hr>
        {lista.join(", ")}
        <hr />
        </div>

        <pre>
            <code>
                
                {JSON.stringify(usuario.address.address, null, 2)}                
                
            </code>
        </pre>
        
        
    </div>
  )
}
