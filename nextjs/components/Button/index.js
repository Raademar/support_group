import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border: ${props => props.border || 'none'};
	display: flex;
	justify-content: center;
	align-content: center;
	width: 211px;
	height: 71px;
	background-color: white;
	color: black;
	font-size: 1rem;
`

const Button = props => {
	return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
