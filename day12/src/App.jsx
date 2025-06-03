import "./App.css";
import ParentMultipleContext from "./assets/components/10MultipleContext/parentprovider";
import AuthProvider from "./assets/components/11conditionalcontext/conditionalprovider";
import ThemeProvider from "./assets/components/12ThemeToggle/ThemeProvider";
import UserProvider from "./assets/components/13ContextwithAPI/apiuserprovider";
import ChildComponent from "./assets/components/2simplereact/2SimpleReactChild";
import { MyProvider } from "./assets/components/2simplereact/2SimpleReactParent";
import ParentComponentMsg from "./assets/components/3Contextprovider/ParentMessage";
import ParentComponentClr from "./assets/components/4accesscontext/parentcolor";
import ParentforMultiChild from "./assets/components/5multiplecomponent/parentforsibling";
import DisplayLang from "./assets/components/6defaultcontext/childLanguage";
import ParentProvider from "./assets/components/7dynamiccontext/ParentProvider";
import ParentforNested from "./assets/components/8NestedChild/nestedParent";
import ParentUpdate from "./assets/components/9updatecontext/parentupdate";
import MiniThemeProvider from "./assets/components/MiniProject1/MiniThemeProvider";
import MiniAuthProvider from "./assets/components/MiniProject2/miniconditionalprovider";
import MiniParentProvider from "./assets/components/MiniProject3/MiniParentProvider";
import LanguageProvider from "./assets/components/MiniProject4/LanguageProvider";

function App() {
  return (
    <>
      <h2>
        1. Introduction to Context API: Write a short explanation of what the
        Context API is and why it is used in React.
      </h2>
      <p>
        The Context API in React built-in tool that allows you to share data
        across the component tree without having to pass props manually at every
        level.
      </p>
      In large Application , prop drilling - passing props through many
      components - can become messy and hard to manage. The contextAPI solves
      this by providing a centralized way to manage and access global data such
      as user info, themes or settings.
      <hr />
      <div className="simple-react">
        <h2>
          2. Create Context: Create a simple context using
          React.createContext().
        </h2>
        <MyProvider>
          <ChildComponent />
        </MyProvider>
      </div>
      <hr />
      <div className="wrap">
        <h2>
          3. Context Provider Example: Wrap a parent component with the
          Context.Provider and pass a value.
        </h2>
        <ParentComponentMsg />
      </div>
      <hr />
      <div className="access-context">
        <h2>
          Access Context with useContext: Use the useContext hook to access
          context values in a child component.
        </h2>
        <ParentComponentClr />
      </div>
      <hr />
      <div className="multiple">
        <h2>
          5. Multiple Components with Context: Access the same context value in
          two sibling components.
        </h2>
        <ParentforMultiChild />
      </div>
      <hr />
      <div className="default-context">
        <h2>
          6. Default Context Value: Create a context with a default value and
          access it without a provider.{" "}
        </h2>
        <DisplayLang />
      </div>
      <hr />
      <div className="dynamic-context">
        <h2>
          7. Dynamic Context Value: Pass a dynamic value (like a counter) to the
          context provider.{" "}
        </h2>
        <ParentProvider />
      </div>
      <hr />
      <div className="nested">
        <h2>
          8. Nested Context Access: Access context values from nested child
          components.{" "}
        </h2>
        <ParentforNested />
      </div>
      <hr />
<div className="update-context">
  <h2>9. Update Context Value with useState: Use useState to dynamically update 
the context value from a child component.</h2>
<ParentUpdate/>

</div><hr/>
<div className="multiple-context">
  <h2>10. Multiple Contexts: Use two different contexts in the same component. </h2>
  <ParentMultipleContext/>

</div><hr/>

<div className="conditional">
  <h2>11. Conditional Rendering with Context: Display different content based on 
context values. </h2>
<AuthProvider/>

</div>
<div className="theme">
  <h2>12. Theme Toggle using Context: Create a context that provides a theme (Light 
or Dark) and allows toggling. </h2>
<ThemeProvider/>
</div><hr/>

<div className="api-context">
  <h2>13. Context with API Data: Fetch user data and share it across components 
using context. </h2>
<UserProvider/>

</div><hr/>

<div className="miniproject1">
  <h2>Mini Project 1: Theme Switcher </h2>
  <MiniThemeProvider/>
</div><hr/>


<div className="miniproject2">
  <h2>Mini Project 2: User Authentication </h2>
<MiniAuthProvider/>
</div><hr/>

<div className="miniproject3">
  <h2>Mini Project 3: Counter with Context </h2>
  <MiniParentProvider/>
</div><hr/>

<div className="miniproject4">
  <h2>Mini Project 4: Language Selector </h2>
<LanguageProvider/>
</div>

    </>
  );
}

export default App;
