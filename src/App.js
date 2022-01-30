import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
