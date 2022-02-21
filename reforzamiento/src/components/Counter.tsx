import HookCounter from '../hooks/Counter'

export default function Counter() {
    const { Counter, cambiar } = HookCounter(15);  

  return (
    <>
      <div>El contador es: <b>{Counter}</b></div>
      <hr />
      <button className="btn btn-primary mr-1" onClick={()=> cambiar(+1)} >+1</button>
      <button className="btn btn-danger ml-2" onClick={()=> cambiar(-1)} >-1</button>
    </>
  );
}
 