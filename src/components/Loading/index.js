import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpinnerBox = styled.div
`
width: 100%;
height: 180px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;

@keyframes spin {
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(359deg);
    }
  }
  
  @keyframes spin3D {
    from {
      transform: rotate3d(.5,.5,.5, 360deg);
    }
    to{
      transform: rotate3d(0deg);
    }
  }
`
const Blue = styled.div
`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

width: 165px;
height: 165px;
border: 1px solid   #377d72;
-webkit-animation: spin3D 3s linear .2s infinite;
`
const Green = styled.div
`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

width: 120px;
height: 120px;
border: 1px solid #bd2800;
-webkit-animation: spin3D 2s linear 1s infinite;
`
const Red = styled.div
`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

width: 90px;
height: 90px;
border: 1px solid #377d72;
-webkit-animation: spin3D 2s linear 0s infinite;
`
const Circle = styled.div
`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

width: 90px;
height: 90px;
border: 1px solid #bd2800;
-webkit-animation: spin3D 0.7s linear 1s infinite;
`

export default function LoadingOrbits() {
    return (
        <SpinnerBox>
            <Blue></Blue>
            <Green></Green>
            <Red></Red>
            <Circle></Circle>

        </SpinnerBox>
    );
  }
  