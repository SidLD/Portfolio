import React, {useRef} from 'react'
// import { Form, Input, Button } from 'antd'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
            emailjs.sendForm('service_pfbnfjp', 'template_30pixmg', form.current, '_dY3cpAn70Y3oTEjp')
            .then((result) => {
                alert(result.text)
            }, (error) => {
                alert(error.text);
            });
	};
  return (
    <div>
        <form ref={form} onSubmit={handleFormSubmit} className='contact-box'>
            <input placeholder='Name' className='input-field' type="text" name="name" />
            <input placeholder='Email' className='input-field' type="email" name="email" />
            <textarea placeholder='Message' className='input-field' name="message" />
            <input className='submit-btn' type="submit" value="Submit" />
        </form> 
    </div>
  )
}

export default Contact