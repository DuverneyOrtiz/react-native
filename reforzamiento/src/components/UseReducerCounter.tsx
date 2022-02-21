import HookReducer from "../hooks/HookReducer";

export const UseReducerCounter = () => {
  const { state, dispatch } = HookReducer();
  return (
    <>
      {state}
      <hr />
      <button className="btn btn-primary" onClick={() => dispatch("incrementar")}>
        Incrementar
      </button>
      <button className="btn btn-danger" onClick={() => dispatch("decrementar")}>
        Decrementar
      </button>
    </>
  );
};
