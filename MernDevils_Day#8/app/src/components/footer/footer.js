import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small dark">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Very long link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 2</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/ml">ML</a>
                                </li>
                                <li>
                                    <a href="/python">Python</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/django">Django</a>
                                </li>
                                <li>
                                    <a href="/reactjs">ReactJs</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/nodejs">NodeJs</a>
                                </li>
                                <li>
                                    <a href="/mern">MERN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="">www.merndevils.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
