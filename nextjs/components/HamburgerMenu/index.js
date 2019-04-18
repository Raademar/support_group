import React, { Component } from 'react'
import Navigation from '../Navigation'
import styled from 'styled-components'
import Logo from '../Logo'
import Section from '../Section'
import { CSSTransition } from 'react-transition-group'
// import './styles.css'

const StyledMenu = styled.div`
	position: fixed;
	left: 0;
	background: #3d73cf;
	height: 100%;
	width: 100vw;
	z-index: 10;
	color: #fff;
	display: grid;
	grid-template-columns: ${props => (props.isDesktop ? '60% 40%' : '100%')};
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
		margin-top: 20%;
		grid-row: 2;
		align-items: flex-start;
	}
`

class HamburgerMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		this.setState({
			loaded: !this.state.loaded
		})
	}

	render() {
		const { loaded } = this.state
		return (
			<div>
				<CSSTransition
					in={loaded}
					classNames="menu"
					timeout={400}
					unmountOnExit
				>
					<StyledMenu {...this.props}>
						<Logo />
						<span onClick={this.props.toggleMenu}>&times;</span>
						<Navigation navigationMenu={this.props.navigationMenu} />
					</StyledMenu>
				</CSSTransition>
			</div>
		)
	}
}

export default HamburgerMenu
