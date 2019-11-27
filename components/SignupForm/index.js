import React from 'react';
import styled from 'styled-components';
import { Form, Input, Error } from '../Form';
import * as yup from 'yup';

yup.addMethod(yup.mixed, 'sameAs', function(ref, message) {
  return this.test('sameAs', message, function(value) {
    const other = this.resolve(ref);
    return !other || !value || value === other;
  });
});

const email = yup
  .string()
  .email('Must be a valid email.')
  .required('Email is required.');

const password = yup
  .string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    'Password must be at least 8 characters, and include upper and lowercase letters, and a number.'
  )
  .required('Password is required.');

const confirm = yup
  .string()
  .sameAs(yup.ref('password'), 'Passwords must match.')
  .required('Confirm is required.');

const schema = yup.object().shape({
  email,
  password,
  confirm,
});

const Actions = styled.div`
  margin-top: 2rem;
`;

function _SignupForm({ className }) {
  const onSubmit = async values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Form className={className} onSubmit={onSubmit} validationSchema={schema}>
      <h3>Create a user</h3>
      <p>Enter a few details to create your first user.</p>
      <Input name="email" placeholder="Your Email Address" />
      <Input name="password" type="password" placeholder="Password" />
      <Input name="confirm" type="password" placeholder="Confirm" />
      <Error name="email" />
      <Error name="password" />
      <Error name="confirm" />
      <Actions>
        <button>Confirm</button>
      </Actions>
    </Form>
  );
}

const SignupForm = styled(_SignupForm)``;

export default SignupForm;
