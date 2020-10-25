import React, { Component } from 'react'

class Navigation extends Component {
  render () {
    const navLink = Object.keys(this.props?.data.items)
      .map(key =>
        <li key={key}>
          <a href={this.props?.data.items[key].href} className='page-scroll'>
            {this.props?.data.items[key].text}
          </a>
        </li>
      )

    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar' />{' '}
              <span className='icon-bar' />{' '}
              <span className='icon-bar' />{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              {this.props?.data.title}
            </a>{' '}
          </div>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              {navLink}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
