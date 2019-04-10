import React, { Component } from 'react'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import Footer from '../Footer'
import About from '../About';
import Volunteer from '../Volunteer';
import Member from '../Member';

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
			isDesktop: false
		}
	}
	handleClick = () => {
		console.log('clicked hamburger')
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	componentDidMount = () => {
		if(window.innerWidth > 900) {
			this.setState({
				isDesktop: true
			})			
		}
	}

	render() {
		const { children } = this.props
		return (
			<div>
				<Header
					navigationMenu={this.props.navigationMenu}
					toggleMenu={this.handleClick}
					images={this.props.images}
					isDesktop={this.state.isDesktop}
				/>
				{this.state.menuOpen && (
					<HamburgerMenu
						toggleMenu={this.handleClick}
						navigationMenu={this.props.navigationMenu}
					/>
				)}

				{children}

				<About />
				<Volunteer />
				<Member />
				<Footer navigationMenu={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
