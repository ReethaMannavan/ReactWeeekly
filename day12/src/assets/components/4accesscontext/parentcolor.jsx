
import colorContext from "./color";
import ChildComponentClr from "./childcolor";

const ParentComponentClr = () => {
  const favColor = "darkblue";

  return (
    <colorContext.Provider value={favColor}>
      <div>
        <h2>Parent Component</h2>
        <ChildComponentClr />
      </div>
    </colorContext.Provider>
  );
};

export default ParentComponentClr;
