import Navigation from '../components/Navigation'
import { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps() {
		// Make request for props
		const response = await axios.get('http://wordpress_3.test/wp-json/wp/v2/branches')

		// Return the data

		return {
			branches: response.data
		}
	}
	render() {
		return (
			<Fragment>
				<Navigation />
				<h1>Our Posts Page!</h1>
				<ul>
					{this.props.branches.map(item => (
						<li key={item.id}>{item.title.rendered}</li>
					))}
				</ul>
			</Fragment>
		)
	}
}
