import Navigation from '../components/Navigation'
import React, { Component } from 'react'
import axios from 'axios'
import { Fragment } from 'react'

export default class extends Component {
	static async getInitialProps(context) {
		console.log(`***** ${slug} ******`)
		const slug = context.query.slug

		const response = await axios.get(
			`http://supportgroup.test/wp-json/wp/v2/branches?slug=${slug}`
		)

		return {
			branch: response.data[0]
		}
	}

	render() {
		return (
			<Fragment>
				<Navigation />
				<h1>{this.props.branch.title.rendered}</h1>
				<article
					className="entry-content"
					dangerouslySetInnerHTML={{
						__html: this.props.branch.content.rendered
					}}
				/>
			</Fragment>
		)
	}
}
