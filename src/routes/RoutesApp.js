import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from '../views/Login';
import Dashboard from '../views/Dashboard';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default RoutesApp;