import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './Components/Loader';
import Home from './Components/Home';

const MegaDoorbusters = lazy(() => import('./Components/Pages/MegaDoorbusters'));
const FortyPercent = lazy(() => import('./Components/Pages/FortyPercent'));
const ThirtyPercent = lazy(() => import('./Components/Pages/ThirtyPercent'));
const TwentyPercent = lazy(() => import ('./Components/Pages/TwentyPercent'));
const UnderTwentyPercent = lazy(() => import ('./Components/Pages/UnderTwentyPercent'));
const CategoryPage = lazy(() => import('./Components/Pages/CategoryPage'));

const Router = () => (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/mega-doorbusters' component={MegaDoorbusters} />
            <Route path='/forty-percent' component={FortyPercent} />
            <Route path='/thirty-percent' component={ThirtyPercent} />
            <Route path='/twenty-percent' component={TwentyPercent} />
            <Route path='/under-twenty-percent' component={UnderTwentyPercent} />
            <Route path='/(electronics|furniture|outdoors|apparel)/' component={CategoryPage} />
        </Switch>
    </Suspense>
)

export default Router;
