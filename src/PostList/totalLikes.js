import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRenderLog from '../hoc/withRenderLog';
import * as postSelectors from '../redux/posts/postSelectors';

const TotalLikes = ({ likes }) => <h1>Total likes: {likes}</h1>;

const mapStateToProps = state => ({
    likes: postSelectors.countTotalLikes(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
    withConnect,
    withRenderLog,
)(TotalLikes);
