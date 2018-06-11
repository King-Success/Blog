import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Articles from '../containers/index';

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>ARTICLES</h2>
        <Articles />
    </div>
);

export default App;

