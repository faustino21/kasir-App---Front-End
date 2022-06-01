import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ColumnLayout from './layout/columnLayout';
import { PageNotFound } from './layout/pageNotFound';
import AuthBloc from './page/auth/bloc/authBloc';
import Login from './page/auth/component/login';
import { RequireAuth } from './page/auth/requireAuth';
import AuthService from './page/auth/service/authService';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login bloc={()=>AuthBloc(AuthService)}/>}/>
        <Route path='/protected/*' element={
          <RequireAuth redirectTo={"/"}>
            <ColumnLayout/>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
