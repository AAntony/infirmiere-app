import React from 'react'

const Office = ({ data }) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{data?.title}</h2>
          <p>{data?.subtitle}</p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {data?.images ? Object.keys(data.images).map(key => (
              <div key={key} className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href={data.images[key].href}
                      title={data.images[key].title}
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>{data.images[key].title}</h4>
                      </div>
                      <img
                        src={data.images[key].src}
                        className='img-responsive'
                        alt={data.images[key].alt}
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
            ))
              : 'loading'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Office
