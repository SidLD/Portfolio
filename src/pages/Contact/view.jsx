import React from 'react'
import {Form, Input, Button} from 'antd'
import { handleFormSubmit } from './index';

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
        <div>
            <Form className='contact-box'
                {...formItemLayout}
                initialValues={
                    {remember: true}
                }
                autoComplete="off"
                onFinish={submit}>
                <Form.Item label="Username" name="name"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your username!'
                            }]
                }>
                    <Input  />
                </Form.Item>
                <Form.Item label="Email" name="email"
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
                <Form.Item label="Message" name="message"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your message!'
                            }]
                }>
                    <Input.TextArea  />
                </Form.Item>

                    <Button block className='submit-btn' type="primary" htmlType="submit">
                        Send <i class="fa-sharp fa-solid fa-paper-plane"></i>
                    </Button>
            </Form>
            {/* <form ref={form} onSubmit={handleFormSubmit} className='contact-box'>
            <input placeholder='Name' className='input-field' type="text" name="name" />
            <input placeholder='Email' className='input-field' type="email" name="email" />
            <textarea placeholder='Message' className='input-field' name="message" />
            <input className='submit-btn' type="submit" value="Submit" />
        </form>  */} </div>
    )
}

export default Contact
