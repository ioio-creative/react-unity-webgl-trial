import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'globals/routes';
import asyncLoadingComponent from 'components/loading/asyncLoadingComponent';

import './Main.css';


// Code Splitting and React Router v4
// https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
const AsyncHomePage = asyncLoadingComponent(_ => import('pages/HomePage'));
const AsyncTrialListPage = asyncLoadingComponent(_ => import('pages/TrialListPage'));
const AsyncTrialDetailPage = asyncLoadingComponent(_ => import('pages/TrialDetailPage'));


function Main(props) {
  return (
    <main id="main">
      <Switch>
        <Route exact path={routes.home} component={AsyncHomePage} />
        <Route exact path={routes.trialBySlug} component={AsyncTrialDetailPage} />
        <Route path={routes.trials} component={AsyncTrialListPage} />
        <Route component={AsyncHomePage} />
      </Switch>
    </main>
  );
}


export default Main;