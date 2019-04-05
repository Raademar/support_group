import React, { Component } from 'react'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import Footer from '../Footer'
import axios from 'axios'
import Link from 'next/link'
import Section from '../Section';
import About from '../About';
class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
			// navigationMenu: []
		}
	}

	// componentDidMount() {
	// 	this.setState({
	// 		navigationMenu: this.props.pages
	// 	})
	// }
	handleClick = () => {
		console.log('clicked hamburger')
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	render() {
		// console.log(this.props.navigationMenu)
		const { children } = this.props
		return (
			<div>
				<Header
					navigationMenu={this.props.navigationMenu}
					toggleMenu={this.handleClick}
					images={this.props.images}
					isDesktop={false}
				/>
				{this.state.menuOpen && (
					<HamburgerMenu
						toggleMenu={this.handleClick}
						navigationMenu={this.props.navigationMenu}
					/>
				)}

				{children}

				<About />
				<Footer navigationMenu={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
