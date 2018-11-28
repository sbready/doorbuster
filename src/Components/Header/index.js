import React from 'react';
import Logo from './Logo/index';
import Search from './Search';
import Subscribe from './Subscribe';
import Login from './Login';

import { withStyles } from '@material-ui/core/styles';

const Header = () => {
    return (
        <div>
            <Logo />
            <Search />
            <Subscribe />
            <Login />
        </div>
    )
}

const styles = theme => {

}

export default withStyles(styles)(Header);
