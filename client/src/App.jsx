import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'




  function App() {
    
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
        </Routes>
         

      </div>
    );
  }

export default App
