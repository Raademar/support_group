import Navigation from '../components/Navigation'
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Fragment } from 'react'

export default class extends Component {
	static async getInitialProps(context) {
		const slug = context.query.slug
		console.log(`***** ${slug} ******`)

		const response = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/branches?slug=${slug}`
		)
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages`
		)
		const branches = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/branches`
		)

		return {
			branch: response.data[0],
			pages: pages.data,
			branches: branches.data
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
