import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Repositories from './Repositories'
export default function Route() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}