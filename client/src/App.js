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

  function handleLogIn (e){
    console.log("hello there");
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/adduser' element={<AddUser />} />
        <Route exact path='/clients' element={<Clients />} />
        <Route exact path='/listem' element={<Listem />} />
        <Route exact path='/data' element={<DataPage/>} />
        <Route exact path='/requirements' element={<Requirements/>} />

      </Routes>
      <div>
      <div>Hello</div>
      <button value="button" onClick={handleLogIn}>Enter</button>
    </div>
    </BrowserRouter>
    
  );
}


export default App;
