import { connect } from 'react-redux';
import { compose } from 'redux';
import PostList from './PostList';
import withRenderLog from '../hoc/withRenderLog';
import * as postSelectors from '../redux/posts/postSelectors';
// import { deletePost } from '../redux/posts/postsAction';
import * as postsOperations from '../redux/posts/postsOperations';

const mapStateToProps = state => ({
    items: postSelectors.getPostsWithSelectedTag(state),
});

const mapDispatchToProps = {
    onDeletePost: postsOperations.deletePost,
};

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(PostList);

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withRenderLog,
)(PostList);
