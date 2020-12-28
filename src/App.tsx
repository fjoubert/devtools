import React, { useState } from 'react';
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
import Base64 from './tools/base64';
import gif404 from './images/notthedroids.gif';

const Home = () => { return <h2>Here goes the home page content</h2>; };

const Page404 = () => (
  <>
    <img src={gif404} alt="Page not found" />
    <h1>This is not the page you are looking for (404).</h1>
  </>
);

export const tools = [
  {
    path: "/",
    title: "Home",
    Component: Home
  },
  {
    path: "/base64",
    title: "Base64",
    Component: Base64
  },
  {
    path: "/json",
    title: "JSON",
    Component: Json
  },
  {
    path: "/urls",
    title: "URLs",
    Component: Urls
  },
  {
    path: "/uuids",
    title: "UUIDs",
    Component: Uuid4
  },
];

export interface ErrorHandlerProps {
  setError: Function;
  clearError: Function;
}

const App = () => {

  const [error, setError] = useState<string>("");

  const routeComponents = tools.map(({ path, Component }, key) => {
    return (
      <Route exact path={path} key={key}>
        <Component setError={setError} clearError={() => setError("")} />
      </Route>
    );
  });

  const navComponents = tools.map(({ path, title }, key) =>
    <span key={key}><Link to={path}>{title}</Link></span>
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            {navComponents}
          </nav>
        </header>

        <Switch>
          {routeComponents}
          <Route component={Page404} />
        </Switch>
        <span className="error">{error}</span>
      </div>
    </Router >
  );
};

export default App;
