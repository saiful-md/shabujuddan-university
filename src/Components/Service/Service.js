import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
	const { image, description, program } = props.course;
	return (
		<div>
			{/* services component  */}
			<Col>
				<Card>
					<Card.Img variant="top" className="w-5" src={image} />
					<Card.Body>
						<Card.Title>{program}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
};

export default Service;
