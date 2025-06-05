import useToggle from "../Hooks/useToggle";

const ToggleComponent =()=>{
    const[isOpen,toggle]=useToggle();

    return(
        <>
        <p>{isOpen?"open":"close"}</p>
        <button onClick={toggle}>Toggle</button>

        </>
    )
}

export default ToggleComponent;