import { useEffect,useState } from "react";

function useTitle(title){

    useEffect(()=>{
        document.title=title;
    },[title])

}

export default useTitle;