import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
	// load data from fakeDb json file
	const [
		services,
		setServices
	] = useState([]);
	useEffect(() => {
		fetch('./fakeDb.json').then((res) => res.json()).then((data) => setServices(data.data.slice(1, 7)));
	}, []);
	return (
		<div>
			<div className="text-center my-5 services ">
				<h1>Our services</h1>
				<p>We provide undergradutaion courses Bba,Bsc,Ba and Graduation courses of Mba, Msc, Ma </p>
			</div>
			<Row xs={1} md={3} className="g-4 m-5">
				{services.map((course) => <Service key={course.id} course={course} />)}
			</Row>
		</div>
	);
};

export default Services;
