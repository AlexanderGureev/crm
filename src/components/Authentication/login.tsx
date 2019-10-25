import React from 'react';
import { Icon } from 'antd';
import { Form, FormContainer, Input } from './styles';
import { FormValues, Props } from './types';
import { H2, Button, Text } from '../../styles/index';

const LoginForm: React.FC<Props> = props => {
  const {
    form: { getFieldDecorator }
  } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values: FormValues) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Header>
          <H2>Авторизация</H2>
          <Text>Войдите, чтобы продолжить</Text>
        </Form.Header>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Введите email' }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Почта"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Введите пароль' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
            />
          )}
        </Form.Item>
        <Button type="primary">Войти</Button>
      </Form>
    </FormContainer>
  );
};

const WrappedLoginForm = Form.create<Props>({
  name: 'loginForm'
})(LoginForm);

export { WrappedLoginForm as LoginForm };
