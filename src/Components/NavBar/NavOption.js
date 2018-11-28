import React, { lazy, Suspense } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Loader from '../Loader';

const DesktopDisplay = lazy(() => import('./TopNav/DesktopDisplay'));
const MobileDisplay = lazy(() => import('./TopNav/MobileDisplay'));

const NavOption = ({ width }) => {
    const isMobile = { xs: 'xs', sm: 'sm' };
    return (
        <Suspense fallback={<Loader />}>
            { isMobile[width] ? <MobileDisplay /> : <DesktopDisplay /> }
        </Suspense>
    )
}

export default withWidth()(NavOption);