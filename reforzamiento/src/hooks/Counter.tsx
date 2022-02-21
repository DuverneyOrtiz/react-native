import { useState } from "react";

export default function Counter(initial: number = 0) {
    const [Counter, setCounter] = useState(initial);
    const cambiar = (number: number): void => setCounter(Counter + number);
  return {Counter, cambiar}
}
