import React, { useState } from 'react';
import {
  HashRouter as Router, // HashRouter to work with github pages
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
import Time from './tools/time';

export const tools = [
  {
    path: "/base64",
    title: "Base64",
    description: "encode, decode",
    Component: Base64,
  },
  {
    path: "/json",
    title: "JSON",
    description: "prettify, minify, escape, unescape",
    Component: Json
  },
  {
    path: "/time",
    title: "Time",
    description: "timestamps, durations",
    Component: Time
  },
  {
    path: "/urls",
    title: "URLs",
    description: "encode, decode",
    Component: Urls
  },
  {
    path: "/uuids",
    title: "UUIDs",
    description: "generate random UUIDs",
    Component: Uuid4
  },
];

const Home = () => {
  const toolElements = tools.map(({ path, title, description }, key) => {
    if (path === '/') return null;
    return (
      <div className="toolCard" key={key}>
        <Link to={path}>{title}: {description}</Link>
      </div>);
  });
  return (
    <div>
      <h2>Here are some tools that could come in handy...</h2>
      {toolElements}
    </div>
  );
};

tools.unshift({
  path: "/",
  title: "Home",
  description: "",
  Component: Home
});

const Page404 = () => (
  <>
    <img src={gif404} alt="Page not found" />
    <h1>This is not the page you are looking for (404).</h1>
  </>
);
const Footer = () => (
  <>
    <div id="footer"><a href="https://github.com/fjoubert/devtools">View on GitHub</a></div>
  </>
);

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
        {Footer()}
      </div>
    </Router >
  );
};

export default App;
