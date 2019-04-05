import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border: ${props => props.border || 'none'};
	display: flex;
	justify-content: center;
	align-content: center;
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => (props.primary ? '#3D73CF' : '#F9C943')};
	color: #fff;
	font-size: 1.3rem;
	margin-bottom: 12px;
	border-radius: 8px;
`

const Button = props => {
	return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
