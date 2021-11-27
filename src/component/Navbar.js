import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Head from './Head';
class Navbar extends Component {
    render() {
        return (
            <div>
                <Head />
                <nav className="nav-container dark-bg-1">
                    {/* nav-logo start */}
                    <div className="nav-logo">
                        <img src="../../assets/images/logo/White.png" alt="logo" />
                    </div>{/* nav-logo end */}
                    {/* menu-close */}
                    <div className="menu-close pointer-large" />
                    {/* dropdown-close-box start */}
                    <div className="dropdown-close-box">
                        <div className="dropdown-close pointer-large">
                            <span />
                        </div>
                    </div>{/* dropdown-close-box end */}
                    <div className="nav-bg" style={{ backgroundImage: 'url(../../assets/images/backgrounds/oliur-8jSTB6NLmVQ-unsplash.jpg)' }}>
                        <div className>
                            <ul className="text-color-4">
                                <li className=" hover-color"><i className="far fa-envelope" /><a href="mailto:info@hnhtechsolutions.com" className="xsmall-title-oswald pointer-small">info@hnhtechsolutions.com</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+92-332-307-2025" className="small-title pointer-small">PAK +92-332-307-2025</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+44-800-041-8794" className="small-title pointer-small">UK +44-800-041-8794</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+1-647-376-6811" className="small-title pointer-small">CA +1-647-376-6811</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+1-646-916-5519" className="small-title pointer-small">NY +1-646-916-5519</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+1-888-352-6601" className="small-title pointer-small">US +1-888-352-6601</a>
                                </li>
                                <li className=" hover-color"><i className="fas fa-mobile-alt" /><a href="tel:+49-1521-665240" className="small-title pointer-small">GER +49-1521-665240</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom-center-button button-left">
                            <form action="https://dash-board.xyz/login.php" method="post">
                                <input type="hidden" defaultValue="https://hnhtechsolutions.com" name="domain" />
                                <div data-animation-child className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05 animated fade-anim" data-animation="fade-anim">
                                    <button type="submit" className="arrow-btn pointer-large">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="bottom-center-button button-right">
                            <form action="https://dash-board.xyz/register.php" method="post">
                                <input type="hidden" defaultValue="https://hnhtechsolutions.com" name="domain" />
                                <div data-animation-child className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05 animated fade-anim" data-animation="fade-anim">
                                    <button type="submit" className="arrow-btn pointer-large">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-overlay" />
                    </div>
                    {/* nav-menu start */}
                    <ul className="nav-menu dark-bg-1">
                        {/* nav-box start */}
                        <li className="nav-box nav-bg-change <?php echo active('index.php')  ?>">
                            <NavLink to="/" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn <?php echo active('index.php')  ?>" data-text="Home">Home</span>
                            </NavLink>
                        </li>{/* nav-box end */}
                        <li className="nav-box nav-bg-change dropdown-open">
                            <a className="pointer-large nav-link">
                                <span className="nav-btn" data-text="Services">Services</span>
                            </a>
                            {/* dropdown start */}
                            <ul className="dropdown">
                           
                                <li className="nav-box">
                                    <NavLink to="/web-design" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Web Design">Web Design</span>
                                    </NavLink>
                                    
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/app-development" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="App Development">App Development</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/web-development" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Web Development">Web Development</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/hosting" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Hosting / Domain">Hosting / Domain</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/contentwriting" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Content Writing">Content Writing</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/accounting" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Accounting System Integration">Accounting System Integration</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/blockchaindevelopment" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Blockchain Development">Blockchain Development</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/logodesigning" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2 nav2" data-text="Logo Designing">Logo Designing</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/digitalmarketing" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Digital Designing">Digital Marketing</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box ">
                                    <NavLink to="/effectivesolution" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Effective Solutions">Effective Solutions</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/digital-development" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="Digital Development">Digital Development</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/seo" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="SEO / SEM / PPC">SEO / SEM / PPC</span>
                                    </NavLink>
                                </li>
                                <li className="nav-box">
                                    <NavLink to="/vfx" className="animsition-link pointer-large">
                                        <span className="nav-btn nav2" data-text="VFX">VFX</span>
                                    </NavLink>
                                </li>
                            </ul>{/* dropdown end */}
                        </li>
                        <li className="nav-box nav-bg-change">
                            <NavLink to="/platform" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn" data-text="Platform">Platform</span>
                            </NavLink>
                        </li>
                        {/* nav-box end */}
                        {/* nav-box start */}
                        <li className="nav-box nav-bg-change">
                            <NavLink to="/solutions" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn" data-text="Solutions">Solutions</span>
                            </NavLink>
                        </li>
                        {/* nav-box end */}
                        {/* nav-box start */}
                        <li className="nav-box nav-bg-change">
                            <NavLink to="/case-study" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn" data-text="Case Study">Case Study</span>
                            </NavLink>
                        </li>
                        {/* nav-box end */}
                        <li className="nav-box nav-bg-change ">
                            <NavLink to="/portfolio" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn" data-text="Portfolio">Portfolio</span>
                            </NavLink>
                        </li>
                        {/* nav-box end */}
                        <li className="nav-box nav-bg-change ">
                            <NavLink to="/clienttele" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn" data-text="Clientele">Clientele</span>
                            </NavLink>
                        </li>
                        <li className="nav-box nav-bg-change dropdown-open">
                            <a className="pointer-large nav-link">
                                <span className="nav-btn" data-text="Company">Company</span>
                            </a>
                            {/* dropdown start */}
                            <ul className="dropdown">
                                <li className="nav-box <?php echo active('companyabout.php')  ?>">
                                    <a href="companyabout.php" className="animsition-link pointer-large">
                                        <span className="nav-btn <?php echo active('companyabout.php')  ?>" data-text="Company About">Company About</span>
                                    </a>
                                </li>
                                <li className="nav-box <?php echo active('companyteam.php')  ?>">
                                    <a href="companyteam.php" className="animsition-link pointer-large">
                                        <span className="nav-btn <?php echo active('companyteam.php')  ?>" data-text="Company Team">Company Team</span>
                                    </a>
                                </li>
                                <li className="nav-box <?php echo active('companycareer.php')  ?>">
                                    <a href="companycareer.php" className="animsition-link pointer-large">
                                        <span className="nav-btn <?php echo active('companycareer.php')  ?>" data-text="Company Career">Company Career</span>
                                    </a>
                                </li>
                            </ul>{/* dropdown end */}
                        </li>
                        {/* nav-box end */}
                        {/* nav-box start */}
                        <li className="nav-box nav-bg-change <?php echo active('contact.php')  ?>">
                            <a href="contact.php" className="animsition-link pointer-large nav-link">
                                <span className="nav-btn <?php echo active('contact.php')  ?>" data-text="Contact">Contact</span>
                            </a>
                        </li>{/* nav-box end */}
                    </ul>{/* nav-menu end */}
                </nav>
            </div>
        )
    }
}

export default Navbar;