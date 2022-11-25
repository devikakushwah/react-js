import React from 'react'
import PropTypes from 'prop-types'
import '../../static/css/auth.css';
export default function Navabr(props) {
  return (
   <header>
  
   {/* <div className="container-fluid"> */}
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html"><img src="food-orange.png" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link naviBTN" href="create-account.html">Create My Will</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    {/* </div>  */}
  </header>
  )
}
Navabr.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navabr.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
