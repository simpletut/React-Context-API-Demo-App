import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './Layouts/Main';
import Posts from './Pages/Posts';
import AddPost from './Pages/AddPost';

const App = props => {

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Posts />
          </MainLayout>
        )}
        />
        <Route exact path="/add" render={() => (
          <MainLayout>
            <AddPost />
          </MainLayout>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;