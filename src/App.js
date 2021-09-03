import "./App.css";
import ReactAsync from "./components/GetApi";
import Navbar from "./components/Navbar";
import "./components/FontAwesome/Index.js";
import Movies from "./components/Movies";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  );
}

export default App;
