import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CashierRoute } from './page/cashiers';
import { Home } from './page/home';
import { PageNotFound } from './page/pageNotFound';

function App() {
  return (
    <Router>
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="navbar-brand">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/cashiers'} className="navbar-brand" >Cashier</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cashiers/*' element={<CashierRoute/>}/>
          <Route path='*' element={<PageNotFound/>}/>
     </Routes>
   </Router>
  );
}

export default App;
