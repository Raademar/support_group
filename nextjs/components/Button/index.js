import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border: ${props => props.border || 'none'};
	position: ${props => props.position || 'relative'};
	display: flex;
	justify-content: center;
	align-content: center;
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => (props.primary ? '#3D73CF' : '#FFDD7E')};
	color: ${props => props.color || '#fff'};
	font-size: ${props => props.fontSize || '1.3rem'};
	margin-bottom: ${props => props.marginBottom || '12px'};
	margin-top: ${props => props.marginTop || '12px'};
	border-radius: 8px;
	z-index: ${props => props.zIndex || ''};
`

const Button = props => {
	return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
