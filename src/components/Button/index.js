import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 1.5px ${({ theme }) => theme.borderRadius};
  width: 100%;
  background: #377d72;
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  font-size: 14px;
  outline: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  cursor: pointer; 
  transition: transform 3s cubic-bezier(0, 1.69, 0.76, 1.74);
/* 
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  */

  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .90;
  }
  &:disabled {
    background-color: #a3b29f;
    color: #a39169;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;