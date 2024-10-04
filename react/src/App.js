import './App.css';
import './dist/css/bootstrap.css';
import { Home } from "./Components/Home";
import { Vue } from "./Components/Vue";
import { Modifier } from './Components/Update';
import {BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/vue/:id' element={<Vue />} />
        <Route path='/update/:id' element={<Modifier />} />
      </Routes>
    </BrowserRouter>

    

    
  );
}

export default App;