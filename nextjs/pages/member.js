import { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import MemberPage from '../components/MemberPage'
import MemberModal from '../components/MemberModal'

class Member extends Component {
	constructor(props) {
		super(props)

		this.state = {
			memberModalOpen: false,
			memberMessageSent: false
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
		const memberPercs = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/member`
		)
		const memberData = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages?slug=member&?_embed`
		)

		// Return the data

		return {
			pages: pages.data,
			about: about.data,
			memberPercs: memberPercs.data,
			memberData: memberData.data
		}
	}

	handleClick = () => {
		this.setState({
			memberModalOpen: !this.state.memberModalOpen
		})
	}

	submitMemberMessage = () => {
		console.log('Member request message sent.')
		this.setState({
			memberMessageSent: !this.state.memberMessageSent
		})
	}

	lockBodyScrolling = () => {}

	render() {
		return (
			<Layout navigationMenu={this.props.pages}>
				<MemberPage
					aboutData={this.props.about}
					memberPercs={this.props.memberPercs}
					isDesktop={this.props.isDesktop}
					toggleModal={this.handleClick}
					bodyScrollLocked={this.state.memberModalOpen}
					memberData={this.props.memberData}
				/>
				{this.state.memberModalOpen && (
					<MemberModal
						toggleModal={this.handleClick}
						memberMessageSent={this.state.memberMessageSent}
						submitMemberMessage={this.submitMemberMessage}
					/>
				)}
			</Layout>
		)
	}
}

export default Member
