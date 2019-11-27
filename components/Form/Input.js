import React from 'react';
import styled, { css } from 'styled-components';

import { breakpoints } from '../../theme';

export const input = css`
  line-height: normal;

  border: 1px solid #203152;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  color: #1d1c1d;
  width: 100%;
  max-width: 100%;
  font-variant-ligatures: none;
  -webkit-transition: box-shadow 70ms ease-out, border-color 70ms ease-out;
  -moz-transition: box-shadow 70ms ease-out, border-color 70ms ease-out;
  transition: box-shadow 70ms ease-out, border-color 70ms ease-out;
  box-shadow: none;
  height: auto;
  margin: 0 0 0.5rem;
  padding: 8px 16px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.25rem;
    padding: 0.75rem;
  }
`;

function _Input({ className, register, name, label, errors, ...rest }) {
  return (
    <div className={className}>
      {label && <label className="form-label">{label}</label>}
      <input name={name} ref={register} className="form-input" {...rest} />
    </div>
  );
}

export const Input = styled(_Input)`
  input {
    ${input}
  }

  label {
    display: block;
    color: #203152;
    margin-bottom: 0.35rem;
    font-size: 14px;
    font-weight: 600;
  }
`;
