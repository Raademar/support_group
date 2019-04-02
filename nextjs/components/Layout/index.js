import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Layout extends Component {
	static async getInitialProps() {
		// Make request for props
		const response = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)

		// Return the data

		return {
			navigationMenu: response.data
		}
	}
	render() {
		const { children } = this.props
		return (
			<div>
				<Header menuItems={this.props.navigationMenu} />
				{children}
				<Footer menuItems={this.props.navigationMenu} />
			</div>
		)
	}
}

export default Layout
