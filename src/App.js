import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css'

import PropTypes from 'prop-types'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Treatment from './components/Treatment'
import Team from './components/Team'
import Office from './components/Office'
import Contact from './components/Contact'

import resumeDataFr from './data/resumeDataFr'

class App extends Component {
  state = {
    resumeDataFr: null
  }

  componentDidMount () {
    this.handleLoadResumeData()
  }

  handleLoadResumeData () {
    this.setState({ resumeDataFr: resumeDataFr })
  }

  render () {
    if(this.state.resumeDataFr === null)
       return "Chargement..."

    return (
      <div>
        <Navigation data={this.state.resumeDataFr.navigation} />
        <Header data={this.state.resumeDataFr.header} />
        <Treatment data={this.state.resumeDataFr.treatment} />
        <Team data={this.state.resumeDataFr.team} />
        <Office data={this.state.resumeDataFr.office} />
        <Contact data={this.state.resumeDataFr.contact} />
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App
