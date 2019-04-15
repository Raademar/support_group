import React, { Component } from 'react'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import Footer from '../Footer'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
			isDesktop: false
		}
	}
	handleClick = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	componentDidMount = () => {
		if (window.innerWidth > 900) {
			this.setState({
				isDesktop: true
			})
		}
		window.addEventListener('resize', () => {
			this.checkIfWindowDidResize()
		})
	}

	checkIfWindowDidResize = () => {
		if (window.innerWidth > 900) {
			this.setState({
				isDesktop: true
			})
			return
		}
		this.setState({
			isDesktop: false
		})
	}

	render() {
		// Extract children and map over to assign new props before we render child components.
		const childrenWithProps = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, { isDesktop: this.state.isDesktop })
		})
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

				{childrenWithProps}
				<Footer navigationMenu={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
