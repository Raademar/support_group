import Navigation from '../components/Navigation'
import { Component, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/Layout';

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const response = await axios.get(`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages`)

		// Return the data

		return {
			pages: response.data
		}
	}
	render() {
		return (
			<Layout pages={this.props.pages}>
				<h1>Our Posts Page!</h1>
				{/* <ul>
					{this.props.branches.map(item => (
						<li key={item.id}>
							<Link href={`/branches/${item.slug}`}>
								<a href={`/branches/${item.slug}`}>{item.title.rendered}</a>
							</Link>
						</li>
					))}
				</ul> */}
			</Layout>
		)
	}
}
