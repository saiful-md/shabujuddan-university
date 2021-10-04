import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="m-5">
           <div className="text-center">
                <iframe title="signboard" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116667.8254459139!2d90.38394920000005!3d23.965052799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633324284963!5m2!1sen!2sbd" width="80%" height="450"  allowfullscreen="" loading="lazy"></iframe>
           </div>
           <div className="my-5 d-flex">
               <div>
                    <div>
                        <h2>XYZ road, Saignboard</h2>
                        <p>Gazipur, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <h2>+889 555 666 80</h2>
                        <p>Saturday to wednessday</p>
                    </div>
                    <div>
                        <h2>shobujuddan@university.com</h2>
                        <p>Email us for online service</p>
                    </div>
               </div>
               <div>
               <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
               </div>
           </div>
        </div>
    );
};

export default Contact;