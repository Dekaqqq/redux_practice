import { createSelector } from 'reselect';

export const getPosts = state => state.posts.items;

export const getSelectedTag = state => state.posts.selectedTag;

// export const getPostsWithSelectedTag = state => {
//     const posts = getPosts(state);
//     const tag = getSelectedTag(state);

//     return posts.filter(post => post.tag === tag);
// };

export const getPostsWithSelectedTag = createSelector(
    [getPosts, getSelectedTag],
    (posts, tag) => posts.filter(post => post.tag === tag),
);

export const countTotalLikes = createSelector(
    [getPosts],
    posts => posts.reduce((acc, el) => acc + el.likes, 0),
);
