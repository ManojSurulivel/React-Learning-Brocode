//conditional rendering = allows you to control what gets rendered
//                        in your application based on certain contional
//                        {Show, hide or change component}

import React from 'react';
import './UserGreeting.css'
import PropTypes from 'prop-types';

const UserGreeting = (props) => {

   const welcomeMessage = <h2 className='welcome-message'>
                            Welcome {props.username}
                          </h2>
   
   const loginPage      = <h2 className='login-page'>
                            Please log in to continue
                          </h2>
   
   return (props.isLoggedIn ? welcomeMessage : loginPage);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn:false,
    username: "Guest",
}

export default UserGreeting;
