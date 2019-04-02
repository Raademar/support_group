import Navigation from '../components/Navigation'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Fragment } from 'react'


export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const pages = await axios.get(`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages`)
		const branches = await axios.get(`http://${process.env.HOSTNAME}/wp-json/wp/v2/branches`)
		const images = await axios.get(`http://${process.env.HOSTNAME}/wp-json/wp/v2/media/`)

		// Return the data

		return {
			pages: pages.data,
			images: images.data,
			branches: branches.data
		}
	}
	render() {
		return (
			<Layout pages={this.props.pages}>

				<h1>Our Posts Page!</h1>
			</Layout>
		)
	}
}