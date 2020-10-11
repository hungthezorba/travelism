import React from 'react'
import './landing.css'
import {Route, Link} from 'react-router-dom'
export default class Landing extends React.Component  {

    render () {
        return (
            <div className="flex-landing">
                <div className="box flex-card">
                    <div class="card text-center" style={{ width: 25 + 'rem' }}>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-user-circle fa-5x"></i></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Link onClick={this.props.handler} to='/main' class="btn btn-primary">Login as user</Link>
                        </div>
                    </div>
                </div>
                <div className="box flex-card">
                    <div class="card text-center" style={{ width: 25 + 'rem' }}>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-landmark fa-5x"></i></h5>
                            <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link to='/' class="btn btn-primary">Login as authority</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
    }

}
