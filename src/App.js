import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './Layouts/Main';
import Todos from './Pages/Todos';
import AddTodo from './Pages/AddTodo';

const App = props => {

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Todos />
          </MainLayout>
        )}
        />
        <Route exact path="/add" render={() => (
          <MainLayout>
            <AddTodo />
          </MainLayout>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;