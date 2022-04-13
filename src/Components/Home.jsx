import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import Image2 from '../images/image2.jpg';
import MainSlider from './Includes/MainSlider';

const Home = () => {
  return (
    <>
    <MainSlider />
    <div className="py-3 py-md-5">
    <Container>
        <Row className="justify-content-center">
            <Col md={4}>

            </Col>
            <Col md={10}>
                <h2 className="text-primary text-center py-3">Welcome to Tselazang Boutique Hotel</h2>
                <p>Tselazang Bourique budget hotel is in the heart of Gangtok offering amenities suitable for common man. It's situated in a convenient location close to all local amenities. The place is attractive and most of our rooms overlook the mountain view wher you can enjoy the Pristine scenery. Most times of the year you can view the very high mountains of Himalayas, its complex geologic structure, large valleys, deep river gorges and rich vegetarian.</p>
                <p>We are in Arihang and a home to Pedestrainized MG Market, Restuarants serve locakl tea, traditional thupka noodles and Mom dumplings, while chic cafes offer coffees and pastries.</p>
            </Col>
        </Row>
    </Container>    
    </div>
    <div className="py-3 py-md-5 bg-light">
        <Container>
            <Row className="justify-content-center">
            <Col md={4} className="align-self-center">
            <div className="text-center">
                <p>We offer Boarding and Lodging services affordable to common man. We have tripe bess and one four bedded Bedded Bedrooms fitted with modern amenities. The Rooms are spacious and have 24 hours hot and Cold-water supply, Television and WIfI facilities.</p>
            </div>
            </Col>
            <Col md={8}>            
            <div className="">
            <Image src={Image2} className="img-fluid" alt="" />
            </div>              
            </Col>
            </Row>
        </Container>
    </div>
    <div id='location'className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.459055461404!2d88.60799461496539!3d27.330113382949705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a50359eb02b9%3A0x8601b5827340f333!2sLocal%20Connection%20-%20Tselazang%20Boutique%20Hotel!5e0!3m2!1sen!2sin!4v1649834304084!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     <div id="gallery" className="py-3 py-md-5 bg-light">
         <Container>
             <Row className="justify-content-center">
                 <Col md={12}>
                     <h2 className="text-primary text-center py-3">Gallery</h2>
                     <Row className="justify-content-center">
                         <Col md={4}>
                         <div className="text-center">
                     <Image src={Image2} className="img-fluid" alt="" />
                     </div>
                         </Col>
                         <Col md={4}>
                         <div className="text-center">
                     <Image src={Image2} className="img-fluid" alt="" />
                     </div>
                         </Col> <Col md={4}>
                         <div className="text-center">
                     <Image src={Image2} className="img-fluid" alt="" />
                     </div>
                         </Col>
                     </Row>

                    
           
                 </Col>
             </Row>
         </Container>
     </div>

    </>
  )
}

export default Home