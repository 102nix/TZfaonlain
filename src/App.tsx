import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
//components:
import { AllHomes } from './components/AllHomes/AllHomes';
import { Detail } from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <div className="content">
        <AllHomes />
        <Switch>
          <Route exact path="/details/:id" component={Detail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
