import React from 'react';
import styled from 'styled-components';

function _Error({ className, name, errors }) {
  if (!errors) {
    return null;
  }

  if (!errors[name]) {
    return null;
  }

  return (
    <div className={className} key={`error-${name}`}>
      {errors[name].message}
    </div>
  );
}

export const Error = styled(_Error)`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;
