import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { HomePage, QuizPage, RankingPage, AboutPage } from '../pages';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/ranking" component={RankingPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;