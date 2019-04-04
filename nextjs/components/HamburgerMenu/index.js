import React from 'react'
import Navigation from '../Navigation'
import styled from 'styled-components'
import Button from '../Button'

const StyledMenu = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background: black;
	height: 100%;
	width: 100vw;
	z-index: 2;
	opacity: 0.9;
	transition: 0.3s ease;
	color: #fff;
	& span {
		font-size: 50px;
		cursor: pointer;
	}
`

const HamburgerMenu = props => {
	return (
		<StyledMenu>
			<span onClick={props.toggleMenu}>&times;</span>
			<Navigation navigationMenu={props.navigationMenu} />
			<Button text="Bli medlem" />
			<Button border={'2px solid black'} text="Bli volontär" />
		</StyledMenu>
	)
}

export default HamburgerMenu
