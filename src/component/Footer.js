import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
               
  {/* footer start */}
  <footer className="footer dark-bg-1">
    {/* flex-container start */}
    <div className="flex-container container top-bottom-padding-90">
      {/* column start */}
      <div className="two-columns bottom-padding-60">
        <div className="content-right-margin-10 footer-center-mobile">
          <img className="footer-logo" src="../../assets/images/logo/White.png" alt="logo" />
        </div>
      </div>{/* column end */}
      {/* column start */}
      <div className="three-columns bottom-padding-60">
        <div className="content-left-right-margin-10">
          <ul className="footer-menu text-color-4">
            <li><a className="pointer-large animsition-link small-title hover-color" href="index.phpl">Home</a></li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="platform.php">Platform</a></li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="solutions.php">Solutions</a>
            </li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="case-study.php">Case study</a></li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="portfolio.php">Portfolio</a>
            </li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="clientele.php">Clientele</a>
            </li>
            <li><a className="pointer-large animsition-link small-title hover-color" href="contact.php">Contact</a>
            </li>
          </ul>
        </div>
      </div>{/* column end */}
      {/* column start */}
      <div className="four-columns bottom-padding-60">
        <div className="content-left-right-margin-10 footer-center-mobile">
          <ul className="footer-information text-color-4">
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
      </div>{/* column end */}
      {/* column start */}
      <div className="three-columns bottom-padding-60">
        <div className="content-left-margin-10">
          <ul className="footer-social">
            <li>
              <div className="flip-btn-box">
                <a href="https://www.instagram.com/hnhtechsolutions/" className="flip-btn pointer-small" data-text="Instagram">Instagram</a>
              </div>
            </li>
            <li>
              <div className="flip-btn-box">
                <a href="https://www.facebook.com/hnhtechsolutions/" className="flip-btn pointer-small" data-text="Facebook">Facebook</a>
              </div>
            </li>
            <li>
              <div className="flip-btn-box">
                <a href="https://www.linkedin.com/company/hnh-tech-solutions/" className="flip-btn pointer-small" data-text="Linkedin">Linkedin</a>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* column end */}
      {/* column start */}
      <div className="twelve-columns">
        <p className="text-color-4 footer-copyright">© Copyright 2020 Hnh Tech Solutions</p>
      </div>{/* column end */}
    </div>{/* flex-container end */}
  </footer>
  {/* <a href="#" className="call-back-btn pointer-small" id="myBtn" data-toggle="modal" data-target="#myModal">
    <img src="../../assets/images/backgrounds/communications.png" className width="100%" />
  </a> */}
  {/* <div id="myModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">Call Back</h4>
        </div>
        <div className="modal-body">
          <form action="send_email.php" method="post">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="name" id="name" defaultValue required />
              <label>Phone Number:</label>
              <input type="number" className="form-control" name="phonenumber" id="phonenumber" defaultValue required />
            </div>
            <button className="button-dsgn-custom pt-2 pb-2 pl-3 pr-3" type="submit">Submit</button>
          </form>
        </div>
        {/*<div class="modal-footer">*/}
        {/*  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>*/}
        {/*  <button type="button" class="btn btn-primary">Save changes</button>*/}
        {/*</div>
      </div> /.modal-content 
    </div>{/* /.modal-dialog 
  </div> */}
  {/* Modal */}
  {/* <div id="myModal" className="modal"> */}
    {/* Modal content */}
    {/* <div className="modal-content">
      <form action="send_email.php" method="post">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" id="name" defaultValue required />
          <label>Phone Number:</label>
          <input type="number" className="form-control" name="phonenumber" id="phonenumber" defaultValue required />
        </div>
        <button className="button-dsgn-custom pt-2 pb-2 pl-3 pr-3" type="submit">Submit</button>
      </form>
    </div>
  </div> */}
  {/* footer end */}
</>
        )
    }
}
