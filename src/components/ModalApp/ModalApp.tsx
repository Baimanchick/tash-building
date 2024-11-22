'use client'

import React, { useState } from 'react';
import { Modal, Form, Input, message, Button, Flex } from 'antd';
import axios from 'axios';
import './ModalApp.css';

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
    submitted;
    const onFinish = (values: any) => {
        const postData = {
            name: values.name,
            phone_number: values.phone,
            email: values.email,
            subject: '',
            message: values.message,
        };

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/form/`, postData)
            .then((response: any) => {
                form.resetFields();
                console.log(response);
                setSubmitted(true);
                message.success('Mail sent successfully. Thank you for your email.');
            })
            .catch((error: any) => {
                console.log(error);
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
            className="modal_app"
        >
            <Flex className="MainFlex_app" gap={63} align={'center'} justify={'center'}>
                <Form
                    requiredMark={false}
                    {...formItemLayout}
                    layout='vertical'
                    className="form_app"
                    validateMessages={validateMessages}
                    onFinish={onFinish}
                >
                    <Form.Item className="formItem_app" label="Name" name="name" >
                        <Input className="input_app" placeholder='Name' />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        className="formItem_app"
                    >
                        <Input className="input_app" placeholder='Phone' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email' }]}
                        className="formItem_app"
                    >
                        <Input className="input_app" placeholder='Email' />
                    </Form.Item>

                    {/* <Form.Item className="formItem_app" label="Subject" name="subject" >
                        <Input className="input_app" placeholder='Subject' />
                    </Form.Item> */}

                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please type message!' }]}
                        className="formItem_app"
                    >
                        <Input.TextArea className="textArea_app" placeholder='Message' />
                    </Form.Item>

                    <Form.Item className="FormSubmit_app" wrapperCol={{ offset: 6, span: 16 }}>
                        <Button
                            className="btn_app"
                            htmlType='submit'
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Modal>
    );
}

export default ModalApp;
