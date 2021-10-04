import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeCourses = (props) => {
    const {program, image} = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className="w-5" src={image} />
                    <Card.Body>
                      <Card.Title>{program}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>  
        </div>
    );
};

export default HomeCourses;