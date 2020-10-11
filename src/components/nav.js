import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom'
export default class Nav extends React.Component {


    render() {
        return (
            <div>
                <nav class="navbar-light bg-light nav-flex">
                    <div>
                        <a class="navbar-brand" href="#">Travelism</a>
                    </div>
                    <div>
                        <ul class="navbar-custom mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Challenge</a>
                            </li>
                            <li class="nav-item">
        <a class="nav-link" href="#">{this.props.account}</a>
                            </li>
                            <li class="nav-item">
                                <p>{this.props.point}</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

