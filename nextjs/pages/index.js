import Navigation from '../components/Navigation'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../components/Layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps({ req }) {
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
		// console.log('index ', this.props.pages)
		return (
			<Layout navigationMenu={this.props.pages} images={this.props.images}>
				<h1>Our Posts Page!</h1>
			</Layout>
		)
	}
}
