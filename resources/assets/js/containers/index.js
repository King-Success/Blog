import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPaginatedArticles } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Index extends Component {
    componentWillMount() {
        this.props.fetchPaginatedArticles();
    }
    render() {
    //     if (!this.props.user) {
    //         return (<div>Select a user...</div>);
    //     }

            if(!this.props.paginatedArticles) {
                return (
                    <div>Loading...</div>
                );
            }
    // console.log(this.props.paginatedArticles);
        return (
           
            <div>
                 <ul>
                     { this.props.paginatedArticles.map( article => {
                        return <li key={article.id}>{ article.title }</li>
                    })} 
                </ul> 
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        paginatedArticles: state.paginatedArticles.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPaginatedArticles: fetchPaginatedArticles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
