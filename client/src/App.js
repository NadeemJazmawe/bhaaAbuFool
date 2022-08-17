import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import AddUser from './Pages/AddUser/AddUser';
import Clients from './Pages/Clients/Clients';
import DataPage from './Pages/DataPage/DataPage';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Listem from './Pages/Listem/Listem';
import Requirements from './Pages/Requirements/Requirements';

function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/listem' element={<Listem />} />
        <Route path='/data' element={<DataPage/>} />
        <Route path='/requirements' element={<Requirements/>} />

      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
