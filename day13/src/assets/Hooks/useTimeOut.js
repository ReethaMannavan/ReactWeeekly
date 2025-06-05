import { useEffect,useRef } from "react";

function useTimeOut(callback,delay) {
    
const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;

    const handler = setTimeout(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

   
    return () => clearTimeout(handler);
  }, [delay]);
}



export default useTimeOut;