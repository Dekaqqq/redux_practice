import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as postSelectors from '../redux/posts/postSelectors';
import * as postActions from '../redux/posts/postsAction';

const tags = [
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'React.js', value: 'React' },
];

const findOption = value => tags.find(el => el.value === value);

const TagFilter = ({ currentTag = null, onChangeTag = () => null }) => (
    <div style={{ width: 200, margin: 'auto' }}>
        <Select
            options={tags}
            value={findOption(currentTag)}
            onChange={onChangeTag}
        />
    </div>
);

const mapStateToProps = state => ({
    currentTag: postSelectors.getSelectedTag(state),
});

const mapDispatchToProps = dispatch => ({
    onChangeTag: tag => dispatch(postActions.changeTag(tag.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TagFilter);
