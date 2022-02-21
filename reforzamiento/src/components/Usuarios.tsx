import HookAuth from "../hooks/HookAuth";
import { Usuario } from '../interfaces/Usuarios';

export default function Usuarios() {
  const { Usuarios, siguientePagina, anteriorPagina } = HookAuth();

  const renderUsuario = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img className="rounded-circle" style={{ width: 35 }} src={usuario.avatar} alt={usuario.first_name} />
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Lista de usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{Usuarios.map(renderUsuario)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={() => siguientePagina()}>
        Siguiente
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => anteriorPagina()}>
        Anteriror
      </button>
    </>
  );
}
