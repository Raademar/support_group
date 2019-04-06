import React from 'react'
import Navigation from '../Navigation'
import styled from 'styled-components'
import Logo from '../Logo'
import Section from '../Section'

const StyledMenu = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background: #3d73cf;
	height: 100%;
	width: 100vw;
	z-index: 2;
	opacity: 1;
	transition: 3s ease;
	color: #fff;
	display: grid;
	grid-template-columns: repeat(3, 33.3333%);
	grid-template-rows: 10% 50% 40%;
	& div {
		grid-row: 1;
		padding: 0 24px;
	}
	& span {
		font-size: 50px;
		position: absolute;
		right: 0;
		cursor: pointer;
		grid-row: 1;
		padding: 0 24px;
	}
	& ul {
		grid-row: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		list-style: none;
		padding: 0 24px;
		& li {
			color: #fff;
			& a {
				text-decoration: none;
				color: #fff;
			}
		}
	}
`

const HamburgerMenu = props => {
	return (
		<StyledMenu {...props}>
			<Logo />
			<span onClick={props.toggleMenu}>&times;</span>
			<Navigation navigationMenu={props.navigationMenu} />
		</StyledMenu>
	)
}

export default HamburgerMenu
