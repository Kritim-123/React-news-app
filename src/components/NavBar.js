import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">News Monkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/">About</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Business</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Entertainment</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">General</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Health</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Science</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Sports</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="/">Technology</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
            </div>
    )
  }
}

export default NavBar
