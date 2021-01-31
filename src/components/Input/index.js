import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input
`
    width: 100%;
    padding: 10px;
    font-size: 1 rem;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.primary} solid;
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    border-bottom: ${({ theme }) => theme.colors.primary} solid ;
    outline: 0;
    margin-bottom: 25px;
    text-transform: uppercase;
    background-color: transparent;
    ::-webkit-input-placeholder {
      color: #a39169;
   }
   
`

export default function Input({ onChange, placeholder, ...props }) {
    return (
      <div>
        <InputBase
          placeholder={placeholder}
          onChange={onChange}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
    );
  }
  
  Input.defaultProps = {
    value: '',
  };
  
  Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  };