import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { fetchPaginatedArticles } from '../actions/index';
// import { fetchSelectedArticle } from '../actions/index';


/*
 * We need "if(!this.props.paginatedArticles)" because we set state to null by default
 * */

class Index extends Component {

    render() {
        
        return (
           <div>{this.props.selectedArticle.body}</div>
           
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
	// console.log(state);
    return {
        selectedArticle: state.selectedArticle
    };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		fetchPaginatedArticles: fetchPaginatedArticles,
// 		fetchSelectedArticle: fetchSelectedArticle,
// 	}, dispatch);
// }

export default connect(mapStateToProps)(Index);
