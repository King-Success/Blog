import React, {Component} from 'react';
import {connect} from 'react-redux';

class Index extends Component {

    render() {
        return (
           <div>{this.props.selectedArticle.body}</div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        selectedArticle: state.selectedArticle
    };
}


export default connect(mapStateToProps)(Index);
