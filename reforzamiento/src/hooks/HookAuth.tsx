import { useEffect } from 'react';
import { useState, useRef } from 'react';
import reqResApi from "../Api/ApiRest";
import { Usuario, ListUsuarios } from "../interfaces/Usuarios"

export default function HookAuth() {
    const [Usuarios, setUsuarios] = useState<Usuario[]>([]);
  const page = useRef(1);

  useEffect(() => { 
    const initialFetch = async () => {
        const result: Usuario[] = await getusuarios(page.current);
        setUsuarios(result);
    }
    initialFetch();
    
  }, []);

  const getusuarios = async (page: number ): Promise<Usuario[]> => {
    try {
      const result = await reqResApi.get<ListUsuarios>(`/users`, {params: {page}});
      return result.data.data;   
    } catch (error) {
        console.log(error);
        return [];
    }
  };

  const siguientePagina = async () => {
      page.current++;
      const result:Usuario[] = await getusuarios(page.current);
      if(result.length > 0) setUsuarios(result);
      else page.current--;

  };

  const anteriorPagina = async ()=> {
    
    if(page.current  > 1 ){
        page.current--;
        const result: Usuario[] = await getusuarios(page.current);
        setUsuarios(result);
    } 
  }


  return {Usuarios, siguientePagina, anteriorPagina}
}
