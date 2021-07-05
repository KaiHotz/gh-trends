import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routePath } from './routes';
import { Trending } from './pages/Trending';
import './App.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routePath.main} component={Trending} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
