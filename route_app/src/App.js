import './App.css';
import React from "react";
import Register from './component/Registration';
import ViewPage from './component/ViewPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Employee from './component/Employee';


function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/registration">Registration</Link>
              </li>
              <li><Link to="/display">Display</Link></li>
          </ul>
        </nav>
        </div>
    <Switch>

      <Route exact path="/registration">
        <Register />
      </Route>

      <Route exact path="/display">
        <Employee />
      </Route>

      <Route exact path="/view/:id" component ={ViewPage}>
        {/* <ViewPage /> */}
      </Route>
      
      <Route render={() => <h4>404: page not found</h4>}></Route>
    </Switch>
    
    </Router>
  );
}


export default App;
