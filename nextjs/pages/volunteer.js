import { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import VolunteerPage from '../components/VolunteerPage'
import VolunteerModal from '../components/VolunteerModal'

class Volunteer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			volunteerModalOpen: false
		}
	}
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)
		const about = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages/?slug=about&?_embed`
		)
		const volunteerPercs = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/volunteer`
		)
		const volunteerData = await axios.get(
			`http://${
				process.env.HOSTNAME
			}/wp-json/wp/v2/pages?slug=volunteer&?_embed`
		)

		// Return the data

		return {
			pages: pages.data,
			about: about.data,
			volunteerPercs: volunteerPercs.data,
			volunteerData: volunteerData.data
		}
	}

	handleClick = () => {
		this.setState({
			volunteerModalOpen: !this.state.volunteerModalOpen
		})
	}

	lockBodyScrolling = () => {}

	render() {
		return (
			<Layout navigationMenu={this.props.pages}>
				<VolunteerPage
					aboutData={this.props.about}
					volunteerPercs={this.props.volunteerPercs}
					isDesktop={this.props.isDesktop}
					toggleModal={this.handleClick}
					bodyScrollLocked={this.state.volunteerModalOpen}
					volunteerData={this.props.volunteerData}
				/>
				{this.state.volunteerModalOpen && (
					<VolunteerModal toggleModal={this.handleClick} />
				)}
			</Layout>
		)
	}
}

export default Volunteer
