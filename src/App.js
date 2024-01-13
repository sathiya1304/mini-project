import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import AppBar from './Components/Dashboard/AppBar';
import Dashboard from './Components/Dashboard/Pages/Dashboard';
import Investor from './Components/Dashboard/Pages/Investor';
import CollectionMember from './Components/Dashboard/Pages/CollectionMember';
import AssignAccount from './Components/Dashboard/Pages/AssignAccount';
import Scheme from './Components/Dashboard/Pages/Scheme';
import Loan from './Components/Dashboard/Pages/Loan';
import LoanCollection from './Components/Dashboard/Pages/LoanCollection';
import Reports from './Components/Dashboard/Pages/Reports';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const updateStatus = (data) => {
    setShowMenu(data);
  }
  function onSelect()
  {
    setShowNav(!showNav)
  }
  return (
    <div className="App">
      <BrowserRouter>
        {showMenu ?
          <>
            <header>
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
              <div className='action'>
               <div className='avatarlabel'>
                <img className='avatar' src={require('./assets/avatar.png')} alt='avatar'/>
                <label>Name</label>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-danger h-75 logout'>Logout</button>
              </div>
            </header>
            <AppBar show={showNav} onClick={onSelect}/>
          </>
          : <></>}
        <Routes>
          <Route path='/' element={<LoginPage updateLoginStatus={updateStatus} />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/home' exact={true} Component={Dashboard} />
          <Route path='/investor' exact={true} Component={Investor} />
          <Route path='/collectionmember' exact={true} Component={CollectionMember} />
          <Route path='/assignaccount' exact={true} Component={AssignAccount} />
          <Route path='/scheme' exact={true} Component={Scheme} />
          <Route path='/loan' exact={true} Component={Loan} />
          <Route path='/loancollection' exact={true} Component={LoanCollection} />
          <Route path='/reports' exact={true} Component={Reports} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
