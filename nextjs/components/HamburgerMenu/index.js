import React, { Component } from 'react'
import Navigation from '../Navigation'
import styled from 'styled-components'
import Logo from '../Logo'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const StyledMenu = styled.div`
	body {
		overflow: ${props => (props.menuOpen ? 'hidden' : 'initial')};
	}
	position: fixed;
	left: 0;
	background: #3d73cf;
	height: 100%;
	width: 100vw;
	z-index: 9999;
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
		margin-top: ${props => (props.isDesktop ? '' : '20%')};
		grid-row: 2;
		align-items: ${props => (props.isDesktop ? '' : 'flex-start')};
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
			<CSSTransition
				in={loaded}
				classNames="menu"
				timeout={600}
				unmountOnExit
				key={1}
			>
				<StyledMenu {...this.props}>
					<Logo />
					<span onClick={this.props.toggleMenu}>&times;</span>
					<Navigation navigationMenu={this.props.navigationMenu} />
				</StyledMenu>
			</CSSTransition>
		)
	}
}

export default HamburgerMenu
