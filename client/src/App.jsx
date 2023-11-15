import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './Components/Landing/LandingPage';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import './App.css'


function App() {

  const location = useLocation();

  return (
    <div className='App' >
       {location.pathname !== '/' && <NavBar/> } 
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='/form' element={ <Form /> } />
      </Routes>
    </div>
  )
}

export default App
