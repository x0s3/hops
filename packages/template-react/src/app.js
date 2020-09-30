/** @jsx createElement */
import { Miss, render, importComponent } from 'hops';
import { createElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Home = importComponent(() => import('./home'));
const Counter = importComponent(() => import('./counter'));

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/counter">Counter</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Miss />
    </Switch>
  </div>
);

export default render(<App />);
