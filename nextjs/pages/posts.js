import Navigation from '../components/Navigation'
import { Component, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Layout from '../compenents/Layout'

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
			<Layout>
				<h1>Our Posts Page!</h1>
				<ul>
					{this.props.branches.map(item => (
						<li key={item.id}>{item.title.rendered}</li>
					))}
				</ul>
			</Layout>
		)
	}
}
