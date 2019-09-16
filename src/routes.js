import React, {Component} from 'react'

import StartPage from './pages/start-page/start-page'

import history from './utils/history'

import { Router, Route } from 'react-router'

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route path='' component={StartPage}/>
                </Router>
            </div>
        )
    }
}


export default Routes;