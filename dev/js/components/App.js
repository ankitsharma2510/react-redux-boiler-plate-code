import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require('../../scss/style.scss');
const App = () =>{
                return(
                    <div>
                        <h2>Username list</h2>
                        <UserList></UserList>
                        <hr/>
                        <h2>User Details</h2>
                        <UserDetail/>
                    </div>
                );
};
export default App;