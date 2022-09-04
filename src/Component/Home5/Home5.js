import React from 'react'
import{Carousel}from 'react-bootstrap'
import './Home5.css'

function Home5() {
  return (
    <div className='car'>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/photos/zoom-in-on-a-map-of-india-and-its-states-picture-id171136097?k=20&m=171136097&s=612x612&w=0&h=0jz7xHDGsbo-MZvCOnURWHbDlauTMZYi_fo016ThnjM="
          alt="First slide"
          height={"300px"}
          width="800px"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://media.istockphoto.com/photos/zoom-in-on-a-map-of-india-and-its-states-picture-id171136097?k=20&m=171136097&s=612x612&w=0&h=0jz7xHDGsbo-MZvCOnURWHbDlauTMZYi_fo016ThnjM="
          alt="Second slide"
          height={"300px"}
          width="800px"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://media.istockphoto.com/photos/zoom-in-on-a-map-of-india-and-its-states-picture-id171136097?k=20&m=171136097&s=612x612&w=0&h=0jz7xHDGsbo-MZvCOnURWHbDlauTMZYi_fo016ThnjM="
          alt="Third slide"
          height={"300px"}
          width="800px"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home5
