import "./App.css";
import AutoFocusForm from "./assets/components/AutoFocusForm";
import Checkbox from "./assets/components/Checkbox";
import Controlledform from "./assets/components/ControlledInput";
import ControlledTextArea from "./assets/components/ControlledTextArea";
import CustomHookForm from "./assets/components/CustomHookform";
import DropDown from "./assets/components/Dropdown";
import DynamicForm from "./assets/components/DynamicFormField";
import ValidationForm from "./assets/components/FormSubmit";
import LoginForm from "./assets/components/MiniProject1";
import TodoList from "./assets/components/MiniProject2";
import ContactForm from "./assets/components/MiniProject3";
import SubscriptionForm from "./assets/components/MiniProject4";
import MultiInput from "./assets/components/MultipleInputs";
import SimpleFormTwo from "./assets/components/PreventDefault";
import RadioButton from "./assets/components/Radiobuttons";
import ResetForm from "./assets/components/ResetForm";
import SimpleForm from "./assets/components/SimpleForm";
import UnControlledform from "./assets/components/UnControlledInput";
import ComplexForm from "./assets/components/useReducer";

function App() {
  return (
    <>
      <div className="output">
        {/* <h1>Forms in React</h1>
      <h2>1.1 Controlled Components</h2>

      <h2>1.2 UnControlled Components</h2>

 <UnControlledform/><hr/>
   <h2>2.Handling Multiple Inputs </h2>
 
 <h2>3.1 Handling Checkboxes </h2>
 
 <h2>3.2 Handling Radio Buttons  </h2>
 
 <h2>3.3 Handling Select Dropdown </h2>

 <h2>4. Handling Form Submission with Validation </h2>

 <h2>5. Form with useReducer for Complex Forms </h2>
 <ComplexForm/><hr/>
 <h2>6. Using Custom Hook for Forms </h2>
 <CustomHookForm/> */}

        <h2>
          1. Introduction to Forms: Write a short explanation of forms in React
          and the difference between controlled and uncontrolled components.{" "}
        </h2>
        <p>
          <strong>Introduction to Forms in React:</strong> Forms in React are
          used to collect user input and handle data submission. Unlike
          traditional HTML forms, React provides a more declarative way to
          manage form elements by binding them to component state. This allows
          React to have full control over the form behavior, making it easier to
          validate and process user input dynamically.
        </p>
        <p>
          <strong>Controlled Components:</strong>
          In controlled components, form data is handled by the component's
          state. The input fields get their current values from the state, and
          any user input is handled through onChange events that update the
          state. This approach gives you complete control over the form
          elements.
        </p>
        <p>
          <strong>Uncontrolled Components: </strong>
          In uncontrolled components, form data is managed by the DOM itself
          rather than React state. You use refs to access form values directly
          when needed, which can be simpler in some cases but offers less
          control.
        </p>
        <hr />
        <h2>
          2. Basic Controlled Input: Create an input field that displays its
          value using useState.
        </h2>
         <Controlledform/><hr/>
         <h2>3. Multiple Inputs in Form: Create a form with name and email inputs and 
display the values on submit. </h2>
<MultiInput/><hr/>
<h2>4. Textarea Input: Create a controlled textarea that displays user input. </h2>
<ControlledTextArea/><hr/>
<h2>5. Select Dropdown: Create a controlled dropdown that displays the selected 
value. </h2>
 <DropDown/><hr/>
 <h2>
  6. Checkbox Input: Create a checkbox that toggles true or false in state. 
 </h2>
 <Checkbox/><hr/>
 <h2>7. Radio Button Group: Create a group of radio buttons that selects one 
option and displays the selected value. </h2>
<RadioButton/><hr/>
<h2>8. Form Submission: Create a form that alerts the submitted values on 
submit. </h2>
<SimpleForm/><hr/>
<h2>9. Prevent Default Behavior: Use preventDefault() to stop the page from 
reloading on form submission. </h2>
<SimpleFormTwo/><hr/>
<h2>10. Validation Message: Display an error message if the input is empty on form 
submission. </h2>
 <ValidationForm/><hr/>
 <h2>11. Dynamic Form Fields: Add an input field dynamically when the user clicks 
an "Add Field" button. </h2>
<DynamicForm/><hr/>
<h2>12. Reset Form Fields: Create a button that resets all input fields. </h2>
<ResetForm/><hr/>
<h2>13. Form with useEffect: Automatically focus the first input field when the 
component mounts using useEffect. </h2>
<AutoFocusForm/><hr/>
<h2>Mini Project 1: Login Form</h2>
<LoginForm/><hr/>
<h2>Mini Project 2: Dynamic Todo List </h2>
<TodoList/><hr/>
<h2>Mini Project 3: Contact Form</h2>
<ContactForm/><hr/>
<h2>Mini Project 4: Subscription Form </h2>
<SubscriptionForm/>


























      </div>
    </>
  );
}

export default App;
