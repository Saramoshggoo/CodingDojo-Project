import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router';
import Dashboard from './component/Dashboard';
import Add from './component/Add';

function App() {
  return (
    <div> 
      <h1 >Project Manager</h1>
     <Router>

       <Dashboard path="/"/>
       <Add path="/add"/>
     </Router>
     
    </div>
  );
}

export default App;
