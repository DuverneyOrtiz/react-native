import { useReducer } from "react";

const reducer = (state: number, action: string) => {
  switch (action) {
    case "incrementar":
      return state + 1;
    case "decrementar":
      return state - 1;
    default:
      return state;
  }
};

export default function HookReducer() {
  const [state, dispatch] = useReducer(reducer, 5);
  return { state, dispatch };
}
