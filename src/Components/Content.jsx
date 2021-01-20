import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Home'
import About from '../about/About'

const Content = props => (
    
        <main className='content'>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Home">
                    <Home/>
                </Route>
                <Route exact path="/About">
                    <About/>
                </Route>
            </Switch>
        </main>
        
)

export default Content