
import './App.css'
import Checkbox from './assets/components/Checkbox'
import Controlledform from './assets/components/ControlledInput'
import CustomHookForm from './assets/components/CustomHookform'
import DropDown from './assets/components/Dropdown'
import ValidationForm from './assets/components/FormSubmit'
import MultiInput from './assets/components/MultipleInputs'
import RadioButton from './assets/components/Radiobuttons'
import UnControlledform from './assets/components/UnControlledInput'
import ComplexForm from './assets/components/useReducer'

function App() {
 

  return (
    <>
    <div className="output">
     <h1>Forms in React</h1>
      <h2>1.1 Controlled Components</h2>
 <Controlledform/><hr/>
      <h2>1.2 UnControlled Components</h2>

 <UnControlledform/><hr/>
   <h2>2.Handling Multiple Inputs </h2>
 <MultiInput/><hr/>
 <h2>3.1 Handling Checkboxes </h2>
 <Checkbox/><hr/>
 <h2>3.2 Handling Radio Buttons  </h2>
 <RadioButton/><hr/>
 <h2>3.3 Handling Select Dropdown </h2>
 <DropDown/><hr/>
 <h2>4. Handling Form Submission with Validation </h2>
 <ValidationForm/><hr/>
 <h2>5. Form with useReducer for Complex Forms </h2>
 <ComplexForm/><hr/>
 <h2>6. Using Custom Hook for Forms </h2>
 <CustomHookForm/>








    </div>
     
    </>
  )
}

export default App
