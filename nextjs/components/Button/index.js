import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border: ${props => props.border || 'none'};
	display: flex;
	justify-content: center;
	align-content: center;
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: white;
	color: black;
	font-size: 1.3rem;
	margin-left: 1.5px;
	margin-right: 1.5px;
`

const Button = props => {
	return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
