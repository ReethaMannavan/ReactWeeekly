
import './App.css'
import './blog.css'
import './todo.css'
import './ecommerce.css'
import TodoApp from './assets/components/Todo'
import WeatherApp from './assets/components/Weatherapp'
import Blog from './assets/components/PersonalBlog/Blog'
import { ThemeProvider } from './assets/components/PersonalBlog/ThemeContext'
import UserManagement from './assets/components/UserManagement/UserManagement'
import Ecommerce from './assets/components/ecommerce/EcommerceProduct'

function App() {
  

  return (
    <>
    <ThemeProvider>
 <Blog/>
    </ThemeProvider>
   
     <TodoApp/>
     <WeatherApp/>
     <UserManagement/>
     <Ecommerce/>
    </>
  )
}

export default App
