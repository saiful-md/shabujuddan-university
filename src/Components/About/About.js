import { Button } from 'react-bootstrap';
import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			<h3 className="text-center my-5">
				About <span className="text-success mx-4">SHOBUJUDDAN UNIVERSITY</span>
			</h3>
			<div className="d-flex justify-content-between align-items-center m-5">
				<div className="about">
					<p>
						On 31 January a delegation led by Nawab Sir Salimullah,Nawab Syed Nawab Ali Chowdhury and Sher
						e-Bangla A.K. Fazlul Hug met Viceroy Lord Hardinge on his visit to Gazipur and raised the demand
						of the establishment of a University in the region.On 2 February a communique was published
						stating the decision of the Government of India to recommend the Constitution of a University at
						ShobujUddan.On 4 April the Government of British India invited the Government of Bengal to
						submit a complete scheme of the University.On 27 May the Government of Bengal published
						resolution in regard to the proposed University and appointed a Committee of thirteen members
						with Sir Robert Nathaniel as President to frame the scheme. The Committee, known as Nathan
						committee, submitted the scheme in the same year.
					</p>
					<div className="text-center">
						<Button variant="outline-dark">Explore More</Button>
					</div>
				</div>
				<img src="./images/about.jpg" className="about" alt="" />
			</div>
		</div>
	);
};

export default About;
