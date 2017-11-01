import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'
import './sidebar.scss';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar__content">
                <div className="sidebar__content--list">
                        <ul>
                            <li>
                                <Link to="/Article">Article</Link>

                            </li>
                            <li>
                                <Link to="/Picture">Picture</Link>
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar