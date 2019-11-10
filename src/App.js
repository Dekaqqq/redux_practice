import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from './redux/posts/postsAction';
import * as postOperations from './redux/posts/postsOperations';
// import pets from './db/pets.json';
import PostList from './PostList/PostListContainer';
import TagFilter from './TagFilter/TagFilter';
import Timer from './Timer/TimerContainer';
import StepSelector from './StepSelector/StepSelector';
import TotalLikes from './PostList/totalLikes';
import PostEditor from './PostList/PostEditor';

class App extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="App">
                {/* <Timer />
                <hr />
                <StepSelector />
                <hr /> */}
                <PostEditor />
                <hr />
                <TagFilter />
                <PostList />
                <hr />
                <TotalLikes />
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchPosts: posts => dispatch(postActions.fetchPosts(posts)),
// });

const mapDispatchToProps = {
    fetchPosts: postOperations.fetchPosts,
};

export default connect(
    null,
    mapDispatchToProps,
)(App);
