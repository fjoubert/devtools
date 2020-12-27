import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Uuid4 from './tools/uuid4';
import Urls from './tools/urls';
import Json from './tools/json';

export const tools = [
  {
    path: "/json",
    title: "JSON",
    component: Json
  },
  {
    path: "/urls",
    title: "URLs",
    component: Urls
  },
  {
    path: "/uuids",
    title: "UUIDs",
    component: Uuid4
  },
];

const App = () => {

  const routeComponents = tools.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);
  const navComponents = tools.map((tool, key) => <span key={key}><Link to={tool.path}>{tool.title}</Link></span>);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <span>
              <Link to="/">Home</Link>
            </span>
            {navComponents}
          </nav>
        </header>

        <Switch>
          {routeComponents}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
};

function Home() {
  return <h2>Here goes the home page content</h2>;
}

export default App;
