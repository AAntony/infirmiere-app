import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Treatment = ({ data }) => {
  return (
    <div id='treatments' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>{data?.title}</h2>
        </div>
        <div className='row'>
          {data.treatments ? Object.keys(data.treatments).map(key => (
            <div key={key} className='col-xs-6 col-md-3'>
              {' '}
              {/* <FontAwesomeIcon icon={data.treatments[key].icon} /> */}
              <FontAwesomeIcon icon={faHome} />
              <h3>{data.treatments[key].title}</h3>
              <p>{data.treatments[key].text}</p>
            </div>
          ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

export default Treatment
