import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postsOperations from '../redux/posts/postsOperations';

class PostEditor extends Component {
    state = { description: '', tag: null };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit({ ...this.state });

        this.setState({
            description: '',
            tag: null,
        });
    };

    render() {
        const { description, tag } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    name="description"
                    cols="30"
                    row="10"
                    value={description}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Post</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    onSubmit: postsOperations.addPost,
};

export default connect(
    null,
    mapDispatchToProps,
)(PostEditor);
