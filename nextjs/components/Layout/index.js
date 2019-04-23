import React, { Component } from 'react'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import Footer from '../Footer'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
			isDesktop: false,
			overrideMenu: false
		}
	}
	handleClick = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
		document.addEventListener('scroll', this.trackScrolling)
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

		document.addEventListener('scroll', this.trackScrolling)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.trackScrolling)
	}

	isBottom = el => {
		return el.getBoundingClientRect().bottom <= window.innerHeight
	}

	trackScrolling = () => {
		const wrappedElement = document.querySelector('.footer')
		const body = document.querySelector('body')
		if (this.isBottom(wrappedElement)) {
			this.setState(
				{
					menuOpen: true
				},
				() => {
					setTimeout(() => {
						const scrollValue = body.scrollHeight - window.innerHeight * 1.8
						window.scroll({
							top: scrollValue
						})
					}, 1000)
				}
			)
		}
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
		const { children } = this.props
		// Extract children and map over to assign new props before we render child components.
		let childrenWithProps
		if (!Array.isArray(children)) {
			childrenWithProps = React.cloneElement(children, {
				isDesktop: this.state.isDesktop
			})
		} else {
			childrenWithProps = children
				.filter(child => React.isValidElement(child))
				.map((child, index) => {
					return React.cloneElement(child, { isDesktop: this.state.isDesktop })
				})
		}

		return (
			<div>
				<Header
					navigationMenu={this.props.navigationMenu}
					toggleMenu={this.handleClick}
					images={this.props.images}
					isDesktop={this.state.isDesktop}
					menuOpen={this.state.menuOpen}
				/>
				{this.state.menuOpen && (
					<HamburgerMenu
						toggleMenu={this.handleClick}
						navigationMenu={this.props.navigationMenu}
						menuOpen={this.state.menuOpen}
					/>
				)}
				{childrenWithProps}
				<Footer navigationMenu={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
