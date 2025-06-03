import { useContext } from "react";
import LanguageContext from "./Languagecontext";

const DisplayLang = ()=>{
    const language = useContext(LanguageContext);

    return(
        <>
        <p>My Mother Tongue is : {language}</p>
        </>
    )
}

export default DisplayLang;