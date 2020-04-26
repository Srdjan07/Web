import React from 'react';
import Homepage from './Pages/Homepage';
import UserLogin from './Pages/UserLogin';
import UserRegister from './Pages/UserRegister';
import CPUpage from './Pages/CPUpage';
import GpuPage from './Pages/GpuPage';
import Admins from './Pages/AdminPage';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Register">
          <UserRegister />
        </Route>
        <Route path="/Login">
          <UserLogin />
        </Route>
        <Route path="/admin">
          <Admins />
        </Route>
        <Route path="/cpu">
          <CPUpage />
        </Route>
        <Route path="/gpu">
          <GpuPage />
        </Route>
        <Route path="/ram">
          <GpuPage />
        </Route>
        <Route path="/storage">
          <GpuPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
