import React, { createContext, useReducer, useEffect } from 'react';
import postsReducer, { POSTS_INITIAL_STATE } from './posts.reducer';
import postsTypes from './posts.types';

export const PostsContext = createContext({
  ...POSTS_INITIAL_STATE
});

const PostsProvider = ({ children }) => {
  const [store, dispatch] = useReducer(postsReducer, POSTS_INITIAL_STATE);
  const { posts, totalPostsCount } = store;

  const createPost = post => {
    dispatch({
      type: postsTypes.CREATE_POST,
      payload: post
    });
  };

  const removePost = postsId => {
    dispatch({
      type: postsTypes.REMOVE_POST,
      payload: postsId
    });
  };

  useEffect(() => {
    dispatch({
      type: postsTypes.SET_POST_COUNT,
      payload: posts.length
    });

  }, [posts]);

  return (
    <PostsContext.Provider value={{
      posts,
      totalPostsCount,
      createPost,
      removePost,
    }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
