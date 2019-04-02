import React, { Component } from 'react'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import Footer from '../Footer'
import axios from 'axios'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            navigationMenu: []
        }
    }

    componentDidMount() {
    this.setState({
		navigationMenu: this.props.pages
    })
    }
	handleClick = () => {
		console.log('clicked hamburger')
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	render() {
        
		const { children } = this.props
		return (
			<div>
				<Header
					menuItems={this.props.navigationMenu}
					toggleMenu={this.handleClick}
				/>
				{this.state.menuOpen && <HamburgerMenu toggleMenu={this.handleClick} />}
				{children}
				<Footer menuItems={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
