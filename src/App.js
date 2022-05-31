import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ColumnLayout from './layout/columnLayout';

function App() {
  return (
    <Router>
      <ColumnLayout/>
   </Router>
  );
}

export default App;
