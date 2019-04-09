import { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)
		const branches = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/branches`
		)


		// Return the data

		return {
			pages: pages.data,
			branches: branches.data
		}
	}
	render() {
		return (
			<Layout navigationMenu={this.props.pages} >
				<h1>Become a member!</h1>
				<h1>Become a volontär!</h1>
			</Layout>
		)
	}
}
