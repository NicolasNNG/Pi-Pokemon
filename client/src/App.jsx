import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom'
import { useState } from 'react';
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'
import Pokemon from './Components/Pokemon/Pokemon'
import NavBar from './Components/NavBar/NavBar'
import Detail from './Components/Detail/Detail'
import Form from './Components/Form/Form'

  function App() {
    const [showNavBar, setShowNavBar] = useState(false); // Estado para controlar si se muestra el NavBar

  // Función para mostrar el NavBar
  const showNavBarHandler = () => {
    setShowNavBar(true);
  };
    return (
      <div>
        <Routes>
        {showNavBar && <NavBar />} {/* Renderiza el NavBar si showNavBar es true */}
          <Route  path='pokemon' element = {<Pokemon/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form/>} />
          <Route path='' element={<Landing onEnterClick={showNavBarHandler} />} />
          {/* Utiliza Navigate para redirigir a /home después de hacer clic en ENTER */}
          {showNavBar && <Route path="/" element={<Navigate to="/home" />} />}
        </Routes>
         

      </div>
    );
  }

export default App
