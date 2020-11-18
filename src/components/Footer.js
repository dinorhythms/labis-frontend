import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/footer.css';

const Footer = () => {
	return (
		<footer className="pb-4 mt-5">
			<Container>
				<Row>
					<Col>
						<p className="text-center text-secondary">
							<Link to="/"><small>Subscriber Agreement</small></Link>{" | "}
							<Link to="/"><small>Privacy Policy</small></Link>{" | "}
							<Link to="/"><small>UK & EU Privacy Rights</small></Link>{" | "}
							<Link to="/"><small>Cookies Policy</small></Link>{" | "}
							<Link to="/"><small>Interest-Based Ads</small></Link>{" | "}
							<Link to="/"><small>Supported Devices</small></Link>{" | "}
							<Link to="/"><small>Help Centre</small></Link>
						</p>
						<p className="text-center text-secondary"><small>© 2020 Labis and its related entities. All Rights Reserved.</small></p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
