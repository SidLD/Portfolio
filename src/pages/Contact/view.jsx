import React from 'react'
import {Form, Input, Button} from 'antd'
import { handleFormSubmit } from './index';
import { ThemeContext } from '../../lib/ThemeContext';

function Contact() {
    const submit = async (values) => {
        const result = setTimeout(await handleFormSubmit(values,2000))
        if(result){
            alert("Successfully Sent to author email")
        }else{
            alert("Something Went Wrong or the qouta has been reached")
        }
    };
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 26
            },
            sm: {
                span: 8
            }
        },
        wrapperCol: {
            xs: {
                span: 27
            },
            sm: {
                span: 16
            }
        }
    };  
    return (
        <ThemeContext.Consumer>{(context) => {
            const {isLightTheme, light, dark } = context
            const theme = isLightTheme ? light: dark;
            return(
                <div id='contact'>
            <h3 className='intro-title animate-charcter'>Contact Me</h3>
            <Form className='contact-box'
                {...formItemLayout}
                initialValues={
                    {remember: true}
                }
                style={{backgroundColor: theme.backgroundColor}}
                autoComplete="on"
                onFinish={submit}>
                <Form.Item label={
                    <p style={{color:theme.color}}>Username</p>
                } name="name"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your username!'
                            }]
                }>
                    <Input  />
                </Form.Item>
                <Form.Item 
                 label={
                    <p style={{color:theme.color}}>Email</p>
                } name="email"
                    rules={
                        [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            }, {
                                required: true,
                                message: 'Please input your E-mail!'
                            },
                        ]
                }>
                    <Input   />
                </Form.Item>
                <Form.Item  label={
                    <p style={{color:theme.color}}>Message</p>
                } name="message"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your message!'
                            }]
                }>
                    <Input.TextArea  />
                </Form.Item>

                    <Button block className='submit-btn' type="primary" htmlType="submit" style={{color:theme.color}} >
                        Send <span className="space"></span><i className="fa-sharp fa-solid fa-paper-plane"></i>
                    </Button>
                <footer className='footer'>
                    <p className='hover-underline-animation' style={{color:theme.color}}><i className="fa-solid fa-location-dot"></i><span className="space"></span> Adress</p> 
                    <p className='hover-underline-animation' style={{color:theme.color}}><i className="fa-solid fa-envelope"></i>    <span className="space"></span>   cidlibril5@gmail.com</p>
                    <p className='hover-underline-animation' style={{color:theme.color}}><i className="fa-solid fa-phone"></i>       <span className="space"></span>   09123456789</p>
                </footer>
            </Form>
           </div>
            )
        }}

        </ThemeContext.Consumer>
    )
}

export default Contact
