import { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import MemberPage from '../components/MemberPage'

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)
		const about = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages/?slug=about&?_embed`
		)
		const memberPercs = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/member`
		)

		// Return the data

		return {
			pages: pages.data,
			about: about.data,
			memberPercs: memberPercs.data
		}
	}
	render() {
		return (
			<Layout navigationMenu={this.props.pages}>
				<MemberPage
					aboutData={this.props.about}
					memberPercs={this.props.memberPercs}
					isDesktop={this.props.isDesktop}
				/>
			</Layout>
		)
	}
}
