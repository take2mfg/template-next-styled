import React from 'react';
import styled from 'styled-components';
import SignupForm from '../components/SignupForm';

export default { title: 'Components|SignupForm' };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const normal = () => (
  <Container>
    <SignupForm />
  </Container>
);
