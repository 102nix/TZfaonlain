import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
//components:
import { AllHomes } from './components/AllHomes/AllHomes';
import { Detail } from './components/Detail/Detail';
import { FilterInput } from './components/FilterInput/FilterInput';
import { TitleDetail } from './components/TitleDetail/TitleDetail';

function App() {
  return (
    <div className="App">
      <div className="content">
        <TitleDetail />
        <FilterInput />
        <AllHomes />
        <Switch>
          <Route exact path="/details/:id" component={Detail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
