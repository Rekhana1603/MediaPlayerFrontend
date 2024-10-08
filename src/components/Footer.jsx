import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-3 w-100'>
      <div className="d-flex justify-content-between">

<div className="d-flex flex-column mt-3">

<div className='d-flex align-items-center mt-2'>
<i className="fa-solid fa-music me-3"></i>
<h5>Media Player</h5>
</div>



<p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our contributors.</p>

<p>Code licensed MIT, docs CC BY 3.0.</p>

<p>Currently v5.3.3.</p>
</div>


<div className="d-flex flex-column mt-3">

<h5>Links</h5>

<div className='d-flex flex-column'>

<a href="" style={{ textDecoration: 'none', color: 'white'}}>Landing Page</a> 
<a href="" style={{ textDecoration: 'none', color: 'white'}}>Home Page</a> 
<a href="" style={{ textDecoration: 'none', color: 'white'}}>Watch History Page </a>

</div>

</div>

<div className="d-flex flex-column mt-3">

<h5>Guides</h5>

<div className='d-flex flex-column'>

<a href="" style={{ textDecoration: 'none', color: 'white'}}>React</a>

<a href="" style={{ textDecoration: 'none', color: 'white'}}>React Bootstrap</a>

<a href="" style={{ textDecoration: 'none', color: 'white'}}>React Router</a>

</div>

</div>

<div className="d-flex flex-column justify-content-between mt-3">
<h5>Contact Us</h5>

<div className="d-flex">

<input type="text" className='form-control' placeholder='Enter your email here' />

<button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>

</div>

<div className="icons d-flex justify-content-between mt-3">

<a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>

<a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>

<a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a> 
<a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>

<a href="" style={{ textDecoration: 'none', color: 'white'}} target='_blank'><i className="fa-brands fa-github"></i></a> 



<a href="" style={{ textDecoration: 'none', color: 'white'}} target='_blank'><i className="fa-solid fa-phone"></i></a> 

  </div>
  
  </div>
  </div>
  
  <p className='text-center at-3'>Copyright &copy; June 2024, Media Player. Built with React</p>
  
  </div>
  
  )
}

export default Footer