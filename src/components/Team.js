import React from 'react'

const Team = ({ data }) => {
  return (
    <div id='equipe' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{data?.title}</h2>
          <p>{data?.subtitle}</p>
        </div>
        <div id='row'>
          {data?.nurses
            ? Object.keys(data.nurses).map(key => (
              <div key={key} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={data.nurses[key].image} alt='...' className='team-img' />
                  <div className='caption'>
                    <h4>{data.nurses[key].firstname} {data.nurses[key].name}</h4>
                    <p>{data.nurses[key].experience}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

export default Team
