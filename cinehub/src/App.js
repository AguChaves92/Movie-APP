import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home/index";
import Detail from "./components/Detail/detail";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie_det/:id" component={Detail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
