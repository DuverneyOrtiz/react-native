import { useReducer } from "react";

interface Auth {
  name: string;
  token: string;
}

const auth = (state: Auth, action: string) => {
  switch (action) {
    case "login":
      return { name: "Duverney", token: "ABC123" };
    case "logout":
      return { name: "", token: "" };
    default:
      return state;
  }
};

export default function Autenticacion() {
  const initialData = {
    name: "",
    token: "",
  };

  const [state, dispatch] = useReducer(auth, initialData);
  return (
    <>
      {state.token.length > 0 ? (
        <div className="alert alert-success" role="alert">
          Usuario Autenticado
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Usuario no logeado
        </div>
      )}

      {state.token.length > 0 ? (
        <button type="button" className="btn btn-danger"  onClick={() => dispatch("logout")} >
          Logout
        </button>
      ) : (
        <button type="button" className="btn btn-success" onClick={() => dispatch("login")}>
          Login
        </button>
      )}
    </>
  );
}
