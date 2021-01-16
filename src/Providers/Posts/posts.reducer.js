import postsTypes from './posts.types';
import { removeFromArray } from './posts.utils';

export const POSTS_INITIAL_STATE = {
  posts: [
    {
      "id": "1",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
    },
    {
      "id": "2",
      "title": "Lorem ipsum dolor sit amet",
      "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
    },
    {
      "id": "3",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
    },
    {
      "id": "4",
      "title": "Lorem ipsum dolor sit amet",
      "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
    },
    {
      "id": "5",
      "title": "Lorem ipsum dolor sit amet",
      "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
    }
  ],
  totalPostsCount: 5
};

const postsReducer = (state, action) => {
  switch(action.type) {
    case postsTypes.CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      };
    case postsTypes.REMOVE_POST:
      return {
        ...state,
        posts: removeFromArray(action.payload, state.posts)
      };
    case postsTypes.SET_POST_COUNT:
      return {
        ...state,
        totalPostsCount: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
