import React, { lazy, Suspense } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Loader from '../Loader';

const Desktop = lazy(() => import('./TopNav/DesktopDisplay'));
const Mobile = lazy(() => import('./TopNav/MobileDisplay'));

const NavOption = ({ width }) => {
    const isMobile = { xs: 'xs', sm: 'sm' };
    return (
        <Suspense fallback={<Loader />}>
            { isMobile[width] ? <Mobile /> : <Desktop /> }
        </Suspense>
    )
}

export default withWidth()(NavOption);