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
		const images = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/sgn/v1/site_logo`
		)

		// Return the data

		return {
			pages: pages.data,
			images: images.data,
			branches: branches.data
		}
	}
	render() {
		return (
			<Layout navigationMenu={this.props.pages} images={this.props.images}>
				<h1>Become a member!</h1>
				<h1>Become a volontär!</h1>
			</Layout>
		)
	}
}
