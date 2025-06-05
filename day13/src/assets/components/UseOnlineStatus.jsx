import useOnlineStatus from "../Hooks/useOnlinestatus";

const UseOnlineStatus =()=>{
 const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  );
}

export default UseOnlineStatus;