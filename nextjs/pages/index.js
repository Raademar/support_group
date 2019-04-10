import About from '../components/About'
import News from '../components/News'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import React, { Component } from 'react'
import axios from 'axios'
import Volunteer from '../components/Volunteer';
import Member from '../components/Member';
import Activities from '../components/Activities';

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
		const activities = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/activities`
		)
		const activitiesImagePath = await axios.get(
			`${activities.data[0]._links['wp:featuredmedia'][0].href}`
		)
		const about = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages/?slug=about&?_embed`
		)
		const aboutImage = await axios.get(
			`${about.data[0]._links['wp:featuredmedia'][0].href}`
		)
		const news = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/posts?_embed`
		)
		const heroImagePath = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages?slug=home&?_embed`
		)
		const heroImage = await axios.get(
			`${heroImagePath.data[0]._links['wp:featuredmedia'][0].href}`
		)

		const aboutUsCards = await axios.get(`http://${process.env.HOSTNAME}/wp-json/sgn/v1/about_us`)

		// Return the data

		return {
			pages: pages.data,
			branches: branches.data,
			about: about.data,
			aboutImage: aboutImage.data,
			heroImage: heroImage.data,
			posts: news.data,
			aboutUsCards: aboutUsCards.data,
			activities: activities.data,
			activitiesImagePath: activitiesImagePath.data
		}
	}
	render() {
		console.log(this.props.aboutUsCards)
		const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
			.source_url
		return (
			<Layout navigationMenu={this.props.pages} >
				<Hero
					heroText="Together for a bright future"
					heroSmallText="We believe in and work for a bright future together"
					heroImage={correctHeroImagePath}
				/>
				<About pageData={this.props.about[0]} aboutImage={this.props.aboutImage.source_url}  />
				<News posts={this.props.posts} backgroundColor="#F2F2F2" />
				<Volunteer pageData={this.props.about[0]} aboutImage={this.props.aboutImage.source_url}/>
				<Member pageData={this.props.about[0]} aboutImage={this.props.aboutImage.source_url}/>
				<Activities activitiesData={this.props.activities} activitiesImage={this.props.activitiesImagePath.media_details.sizes.thumbnail.source_url} />
			</Layout>
		)
	}
}
