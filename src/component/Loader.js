import React, { Component } from 'react'
import Navbar from './Navbar';
import Home from '../pages/Home';
import $ from 'jquery';
class Loader extends Component {
    render() {
        return (
            <div>
            {/* loading start */}
            <div className="loading">
                <img className="logo-loading" src="assets/images/logo/Black.png" alt="logo" />
            </div>
            {/* loading end */}
            {/* pointer start */}
            <div className="pointer" id="pointer">
                <i className="fas fa-long-arrow-alt-right" />
                <i className="fas fa-search" />
                <i className="fas fa-link" />
            </div>
            {/* pointer end */}
            {/* to-top-btn start */}
            <a className="to-top-btn pointer-small" href="#up">
                <span className="to-top-arrow" />
            </a>
            {/* to-top-btn end */}
            </div>
        )
    }
}
export default Loader;