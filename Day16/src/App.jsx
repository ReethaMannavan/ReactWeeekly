import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './assets/components/Home';

import './App.css'
import { About } from './assets/components/About';
import Navbar from './assets/components/Navbar';
import NotFound from './assets/components/NotFound';
import { Team } from './assets/components/Team';
import NavigateButton from './assets/components/NavigateButton';
import ProtectedPage from './assets/components/ProtectedPage';



function App() {
 

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
         <Route path="/" element={<><Home /><NavigateButton /></>} />
        <Route path="/about" element={<About/>} />
         <Route path="/about/team" element={<Team/>} />
        {/* <Route path="/nav" element={<Navbar/>} /> */}
        <Route path="/" element={<Navigate to="/" />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/protected" element={<ProtectedPage/>} />
       
      </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
