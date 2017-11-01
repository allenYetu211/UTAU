import React, {Component} from 'react';
import Sidebar from './Component/Sidebar/Sidebar'
import Harder from './Component/Harder/Harder'
import routes from './Router/Router';
import './Public/css/gloab.scss'
import './Public/css/index.scss'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="nav">
                        <Harder></Harder>
                    </div>
                    <div className="main__content">
                        <div className="sidebar">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="subject">
                            <div style={{flex: 1, padding: '10px'}}>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
