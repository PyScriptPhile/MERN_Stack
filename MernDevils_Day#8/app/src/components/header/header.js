import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">MernDevils</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home
                    <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/bloggers">Bloggers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">My Profile</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/signup">SignUp</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/login">Login</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
