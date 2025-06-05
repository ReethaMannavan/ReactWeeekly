import useTimeOut from "../Hooks/useTimeOut";

const UseTimeOutComp =()=>{

 useTimeOut(() => {
    alert('Hello!');
  }, 3000);

  return <div>Wait for it...</div>;
}

export default UseTimeOutComp;