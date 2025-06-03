import ChildComponentMsg from "./ChildMessage";
import MessageContext from "./Message";


const ParentComponentMsg = () => {
  const message = "Hello from Context!";

  return (
    <MessageContext.Provider value={message}>
      <div>
        <h2>Parent Component</h2>
        <ChildComponentMsg/>
      </div>
    </MessageContext.Provider>
  );
};

export default ParentComponentMsg;