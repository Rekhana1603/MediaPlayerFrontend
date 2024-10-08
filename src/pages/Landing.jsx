import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/feature1.jpeg'
import feature2 from '../assets/feature2.jpeg'
import feature3 from '../assets/feature3.jpg'

const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className='row align-items-center'>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aliquam ullam iusto animi quasi. Laudantium vitae ea harum odit asperiores nostrum, maiores odio sapiente atque temporibus! Debitis laudantium voluptatum expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut perspiciatis laboriosam quaerat vitae vero earum tempore dolorum rem, commodi corrupti expedita maiores architecto laudantium officiis eaque? Incidunt dolorum velit blanditiis.</p>
          <Link to={'/home'} className="btn btn-info mt-5">Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img style={{ minHeight: '80vh' }} className='img-fluid ms-5' src={LandingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere exercitationem consequatur necessitatibus adipisci natus hic! Cum rem, fuga repudiandae ipsum tempora asperiores voluptate dolorum, veniam repellat neque distinctio nisi!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere exercitationem consequatur necessitatibus adipisci natus hic! Cum rem, fuga repudiandae ipsum tempora asperiores voluptate dolorum, veniam repellat neque distinctio nisi!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Managing Video History:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere exercitationem consequatur necessitatibus adipisci natus hic! Cum rem, fuga repudiandae ipsum tempora asperiores voluptate dolorum, veniam repellat neque distinctio nisi!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/jxCRlebiebw" title="The GOAT (Official Trailer) Tamil: Thalapathy Vijay | Venkat Prabhu | Yuvan Shankar Raja | T-Series" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing