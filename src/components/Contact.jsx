import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { getChildrenToRender } from '../utils';
import ReCAPTCHA from "react-google-recaptcha";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const recaptchaRef = React.createRef();

class Contact extends Component {
    state = { 
        name: '',
        email: '',
        message: ''
    };

    onChange = (value) => {
      console.log("Captcha value:", value);
    }

    onFinish = values => {
        console.log(values);
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log(recaptchaValue);
        axios({
          method: "POST", 
          url:"https://tornaltisolar.com:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            message.success('This is a prompt message for success, and it will disappear in 10 seconds', 5);
          }else if(response.data.status === 'fail'){
            message.error ('This is a prompt message for success, and it will disappear in 10 seconds', 5);
          }
        })
    };

    render() { 
        const { dataSource, isMobile, ...props } = this.props;
        const { titleWrapper } = dataSource;
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} no válido!',
            },
        };

        return (
          <div {...props} className="contact">
            <div {...titleWrapper}>
              {titleWrapper.children.map(getChildrenToRender)}
            </div>
            <Form {...layout} size="large" name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
              <Form.Item
                name={['user', 'name']}
                label="Nombre"
                placeholder="Nombre"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                placeholder="Correo"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'message']} label="Mensaje" placeholder="Mensaje">
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item wrapperCol={{ sm: { offset: 6, ...layout.wrapperCol } }}>
                <Row gutter={[16,24]}>
                  <Col span={24}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      // size="invisible"
                      // sitekey="6Ld2I_YUAAAAACd56OfeVZRJvPIR1nvJqMmEit3d"
                      sitekey="6LeqMfYUAAAAAGMYb3pPPgo-W5qoflA3ayD4NY7N"
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{span: 24}} sm={{span: 8}} >
                    <Button id='submitContact' type="primary" htmlType="submit" block>
                      Submit
                    </Button>
                  </Col>
                </Row>

              </Form.Item>
              
            </Form>
          </div>
          );
    };
}
 
export default Contact;