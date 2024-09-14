'use client'

import React, { useState } from 'react'
import { Modal, Form, Input, message, Button } from 'antd'
import axios from 'axios';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};

export interface ModalAppProps {
  isModalVisible: boolean;
  handleCancel: any;
}

function ModalApp({ isModalVisible, handleCancel }: ModalAppProps) {
    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(false);

    const onFinish = (values: any) => {
        const postData = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            subject: values.subject,
            message: values.message,
        };

        axios.post('https://michelle-kg.online/form/', postData)
            .then((response: any) => {
                form.resetFields();
                setSubmitted(true);
                message.success('Mail sent successfully. Thank you for your email.');
            })
            .catch((error: any) => {
                message.error('Something went wrong. Please try again');
            });
        handleCancel();
    };

    return (
        <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            centered
            className="max-w-[600px] w-full bg-white rounded-lg shadow-lg p-10"
            style={{ transition: 'all 0.3s ease' }}
        >
            <div className="flex flex-col items-center">
                <h2 className="text-[#333] text-4xl font-bold mb-8 tracking-wide text-center">
                    Contact Us
                </h2>

                <Form
                    {...formItemLayout}
                    layout="vertical"
                    validateMessages={validateMessages}
                    onFinish={onFinish}
                    className="w-full"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        className="mb-6"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input 
                            className="w-full h-[50px] bg-gray-50 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 p-4" 
                            placeholder="Your name" 
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        className="mb-6"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                        <Input 
                            className="w-full h-[50px] bg-gray-50 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 p-4" 
                            placeholder="Phone number" 
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        className="mb-6"
                        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                    >
                        <Input 
                            className="w-full h-[50px] bg-gray-50 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 p-4" 
                            placeholder="Email address" 
                        />
                    </Form.Item>

                    <Form.Item
                        label="Subject"
                        name="subject"
                        className="mb-6"
                        rules={[{ required: true, message: 'Please enter a subject' }]}
                    >
                        <Input 
                            className="w-full h-[50px] bg-gray-50 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 p-4" 
                            placeholder="Subject" 
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        name="message"
                        className="mb-8"
                        rules={[{ required: true, message: 'Please type your message' }]}
                    >
                        <Input.TextArea 
                            className="w-full h-[120px] bg-gray-50 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 p-4" 
                            placeholder="Message"
                            rows={4}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full h-[50px] bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                        >
                            Send Message
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default ModalApp;
