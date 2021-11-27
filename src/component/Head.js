import React, { Component } from 'react'
import Loader from './Loader';
class Head extends Component {
    render() {
        return (
       <div>
        <header className="fixed-header" style={{minHeight: "137px"}}>
        {/* header-flex-box start */}
        <div className="header-flex-box">
            {/* logo start */}
            <a href="index.php" className="logo pointer-large animsition-link">
            <div className="logo-img-box">
                <img className="logo-white" src="../../assets/images/logo/White.png" alt="logo" />
                <img className="logo-black" src="../../assets/images/logo/Black.png" alt="logo" />
            </div>
            </a>{/* logo end */}
            {/* menu-open start */}
            <div className="menu-open pointer-large">
            <span className="hamburger" />
            </div>{/* menu-open end */}
        </div>{/* header-flex-box end */}
        </header>
        </div>
        )
    }
}
export default Head;