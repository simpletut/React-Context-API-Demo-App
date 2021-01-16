import React, { createContext, useEffect, useReducer } from 'react';
// import { addItemToArray, removeItemFromArray } from './todos.utils';
import postsReducer, { POSTS_INITIAL_STATE } from './posts.reducer';
import postsTypes from './posts.types';

export const PostsContext = createContext({
  ...POSTS_INITIAL_STATE
});

const PostsProvider = ({ children }) => {
  const [store, dispatch] = useReducer(postsReducer, POSTS_INITIAL_STATE);
  const { posts, totalPostsCount } = store;

  const addPost = post => {
    if (!post) return;
    dispatch({
      type: postsTypes.ADD_POST,
      payload: post
    });
  };

  const removePost = postID => {
    if (!postID) return;
    dispatch({
      type: postsTypes.REMOVE_POST,
      payload: postID
    });
  }

  useEffect(() => {
    dispatch({
      type: postsTypes.SET_POSTS_COUNT,
      payload: posts.length
    })
  }, [posts]);

  return (
    <PostsContext.Provider value={{
      posts,
      addPost,
      removePost,
      totalPostsCount
    }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;