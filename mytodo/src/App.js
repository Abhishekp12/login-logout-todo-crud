import './App.css';
import Login from'./Components/LoginForm/Login';
import {BrowserRouter as Router, Switch, Route}from'react-router-dom';
import Register from'./Components/Registration/Register';
import Home from'./Components/Home/Home';
import Features from'./Components/Feature/Features';

const App=()=>{
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/features' component={Features} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
