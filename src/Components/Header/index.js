import React from 'react';
import Logo from './Logo/index';
import Search from './Search';
import Login from './Login';

import { withStyles } from '@material-ui/core/styles';

const Header = () => {
    return (
        <div>
            <Logo />
            <Search />
            <Login />
        </div>
    )
}

const styles = {
    
}

export default withStyles(styles)(Header);
