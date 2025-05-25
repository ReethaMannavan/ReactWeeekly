
import './App.css'
import './App2.css'
import './App3.css'
import './App4.css'
import './App5.css'

import GroceryApp from './assets/Components1/GroceryListApp'
import LoginToggle from './assets/Components2/UserLogin'
import PersonCard from './assets/Components3/AgeIncreaser'
import CharCounter from './assets/Components4/CharacterCounter'
import FruitSelector from './assets/Components5/FruitSelector'

function App() {
 

  return (
    <>
     
<GroceryApp/>
<LoginToggle/>
<PersonCard name="Reetha Meganathan" />
<CharCounter/>
<FruitSelector/>
    </>
  )
}

export default App
