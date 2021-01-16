import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './Layouts/Main';
import Posts from './Pages/Posts';
import AddPost from './Pages/AddPost';
import PostsProvider from './Providers/Posts/posts.provider';

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <PostsProvider>
            <MainLayout>
              <Posts />
            </MainLayout>
          </PostsProvider>
        )}
        />
        <Route exact path="/add" render={() => (
          <PostsProvider>
            <MainLayout>
              <AddPost />
            </MainLayout>
          </PostsProvider>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;