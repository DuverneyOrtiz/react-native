import { useState } from "react";

export default function HookEstado () {

    const [activo, setactivo] = useState(true);

    const activar = ()=> setactivo(true);
    const inactivar = ()=> setactivo(false)


    return {activo, setactivo, activar, inactivar}
}