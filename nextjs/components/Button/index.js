import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: ${props => props.border || "none"};
  position: ${props => props.position || "relative"};
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.primary ? "#3D73CF" : "#F9C943")};
  background-color: ${props => (props.backgroundColor ? "" : "")};
  color: ${props => props.color || "#fff"};
  font-size: ${props => props.fontSize || "1.3rem"};
  font-weight: ${props => props.fontWeight || "900"};
  margin-bottom: ${props => props.marginBottom || "12px"};
  margin-top: ${props => props.marginTop || "12px"};
  border-radius: 8px;
  z-index: ${props => props.zIndex || ""};
  &:hover {
    background-color: white;
    color: ${props => (props.primary ? "#3D73CF" : "#1B1B1B")};
    border: ${props =>
      props.primary ? "4px solid #3d73cf" : "4px solid #F9C943"};
  }
`;

const Button = props => {
	return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
