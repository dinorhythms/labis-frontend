import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import './landing.css';
import c1 from '../../assets/images/channels/bet-whitespace.png';
import c2 from '../../assets/images/channels/cbs-whitespace.png';
import c3 from '../../assets/images/channels/cc-whitespace.png';

import xclusive from '../../assets/images/Disney_LandingPage_originals_720x505_IS.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'

const Landing = () => {

	return (
		<div className="landing"> 
			<div className="hero">
				<Container fluid>
					<div className="brand">Labis<span>Tv</span></div>
					<h1 className="heading">The greatest stories, <br/>
						all in one place.
					</h1>
					<h2 className="sub-heading mb-4">Watch thousands of shows and movies.<br/> Plans start at $5.99/month. Cancel anytime.</h2>
					<Button variant="danger" size="lg">GET STARTED</Button>
					<p className="mt-4">Free trial for new & eligible returning subscribers only.</p>
				</Container>
			</div>
			<div className="channels">
				<Container>
					<h6 className="mb-3">Loads of entertainment</h6>
					<Row className="mb-3">
						<Col md="3" className="d-flex justify-content-center align-items-center mb-2">
								<Image src={c1} className="img-fluid mr-2 channels-img" />
								<Image src={c2} className="img-fluid mr-2 channels-img" />
								<Image src={c3} className="img-fluid mr-2 channels-img" />
						</Col> 
						<Col md="6">
							<h2>Get Hulu, Disney+, and ESPN+ for $12.99/month.</h2>
						</Col>
						<Col md="3" className="d-flex justify-content-center align-items-center">
							<Button variant="outline-light" size="lg" className="mt-3">Signup Now</Button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="exclusive pt-5 pb-5 text-white"> 
				<Container>
					<Row>
						<Col md="7">
							<Image src={xclusive} className="img-fluid" />
						</Col>
						<Col md="5" className="d-flex">
							<div className="my-auto text-center text-md-left">
								<h2 className="mb-3">Exclusive Disney+ Originals</h2>
								<h5>Watch never-before-seen movies, series, shorts and more from the world’s greatest storytellers – only available on Disney+</h5>
							</div>
						</Col>
					</Row>
					<hr className="border-white mt-5 mb-5"/>
					<Row>
						<Col><h2 className="text-center">Always available on your devices</h2></Col>
					</Row>
					<Row className="text-center mt-4 mb-3">
						<Col md="4">
							 <FontAwesomeIcon color="white" className="mb-3" icon={faTv} size="6x" />
							 <h4>TV</h4>
						</Col>
						<Col md="4">
							 <FontAwesomeIcon color="white" className="mb-3" icon={faLaptop} size="6x" />
							 <h4>Computer</h4>
						</Col>
						<Col md="4">
							<FontAwesomeIcon color="white" className="mb-3" icon={faMobile} size="6x" />
							<h4>Mobile</h4>
						</Col>
					</Row>
					<Row>
						<Col className="text-center">
							<h3 className="mb-3">Download Mobile App</h3>
							<div className="d-flex justify-content-center">
								<div className="text-center mr-3 mr-md-5">
									<FontAwesomeIcon color="white" className="mb-3" icon={faGooglePlay} size="6x" /> 
									<h5>Google Store</h5>
								</div>
								<div className="text-center">
									<FontAwesomeIcon color="white" className="mb-3" icon={faAppStore} size="6x" />
									<h5>Play Store</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Landing;
