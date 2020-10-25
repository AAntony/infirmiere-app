import React from 'react'

const Header = ({ data }) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {data ? data.title : 'Loading'}
                  <span />
                </h1>
                <p>
                  {data ? data.paragraph : 'Loading'}
                </p>
                <a
                  href='#treatments'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {data ? data.button : 'Loading'}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
