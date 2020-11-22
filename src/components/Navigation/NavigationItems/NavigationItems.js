import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        { props.isAuthenticated ? <h4 className={classes.helloUser}> Hello {localStorage.getItem('email')}</h4> : null}
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated 
           ? <NavigationItem link="/auth">Authenticate</NavigationItem>
           :  <NavigationItem link="/logout">Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;