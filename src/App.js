import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/pages/NotFound';
import AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import User from './component/user/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
