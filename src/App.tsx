import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Uuid4 from './tools/uuid4';
import JsonLint from './tools/json-lint';
import './App.css';

const tools = [
  {
    path: "/uuids",
    title: "UUIDs",
    component: Uuid4
  },
  {
    path: "/json-lint",
    title: "JSON Lint",
    component: JsonLint
  }
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
          {/* {tools.map((tool, index) =>
            <Route key={index} path={tool.path} component={tool.component} />
          )} */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

function Home() {
  return <h2>Here goes the home page</h2>;
}

export default App;
