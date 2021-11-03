import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Regalo from "./components/regalo";
import Landingpage from "./components/landingpage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/">
          <Landingpage/>
        </Route>
        <Route exact path= "/home">
          <Home/>
        </Route>
        <Route exact path= "/regalo">
          <Regalo/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
