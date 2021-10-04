import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCourses from '../HomeCourses/HomeCourses';
import './Section.css';


const Section = () => {
    const [headerImg, setHeaderImg] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./fakeDb.json')
        .then(res => res.json())
        .then(data =>{
            setHeaderImg(data.data[0])
            setCourses(data.data.slice(1,5)) } )
    },[]);
    const image= headerImg.image;
    const sectionImage ={
        backgroundImage: `url(${image})`
    }
    return (
       <div className="mb-5">
            <div style={sectionImage} className="container-fluid p-0 header-image">
                <div>
                    <h1>{headerImg.name}</h1>
                    <h6>{headerImg.description}</h6>
                </div>
            </div>
            {
                
            }
            <div>
                <h1 className="text-center mt-5">Our services</h1>
                <Row xs={1} md={4} className="g-4 m-5">
                    {
                        courses.map( course => <HomeCourses course ={course}></HomeCourses>)
                    }
                </Row>
            </div>
       </div>
    );
};

export default Section;