import About from '../components/About'
import News from '../components/News'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import React, { Component } from 'react'
import axios from 'axios'
import Volunteer from '../components/Volunteer'
import Member from '../components/Member'
import Projects from '../components/Projects'
import Partners from '../components/Partners'
import Donate from '../components/Donate'
import Activities from '../components/Activities'
import VolunteerMember from '../components/VolunteerMember'
import styled from 'styled-components'

const StyledVolunteerMember = styled.div`
	display: ${props => (props.isDesktop ? 'flex' : 'block')};
`

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
		const about = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages/?slug=about&?_embed`
		)
		// const aboutImage = await axios.get(
		// 	`${about.data[0]._links['wp:featuredmedia'][0].href}`
		// )
		const news = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/posts`
		)
		const projects = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/projects`
		)
		const heroImagePath = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages?slug=home&?_embed`
		)
		const heroImage = await axios.get(
			`${heroImagePath.data[0]._links['wp:featuredmedia'][0].href}`
		)
		const aboutUsCards = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/sgn/v1/about_us`
		)
		const memberData = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/pages?slug=member&?_embed`
		)
		const volunteerData = await axios.get(
			`http://${
				process.env.HOSTNAME
			}/wp-json/wp/v2/pages?slug=volunteer&?_embed`
		)
		const partnerImages = await axios.get(
			`http://${
				process.env.HOSTNAME
			}/wp-json/wp/v2/partners`
		)

		// Return the data

		return {
      pages: pages.data,
      branches: branches.data,
      about: about.data,
      // aboutImage: aboutImage.data,
      heroImage: heroImage.data,
      posts: news.data,
      aboutUsCards: aboutUsCards.data,
      activities: activities.data,
      projectsData: projects.data,
      memberData: memberData.data,
      volunteerData: volunteerData.data,
	  partnerImages: partnerImages.data
    };
	}
	render() {
		// console.log(this.props.memberData)
		const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
			.source_url
		return (
      <Layout navigationMenu={this.props.pages}>
        <Hero
          heroText="Together for a bright future"
          heroSmallText="We are a non-profit organization working hard to give refugees a better future"
          heroImage={correctHeroImagePath}
        />
        <About
          pageData={this.props.about[0]}
          // aboutImage={this.props.aboutImage.source_url}
        />
        <News posts={this.props.posts} backgroundColor="#F2F2F2" />
        <VolunteerMember
          pageData={this.props.about[0]}
          // aboutImage={this.props.aboutImage.source_url}
          isDesktop={this.props.isDesktop}
          memberData={this.props.memberData}
          volunteerData={this.props.volunteerData}
        />
        <Projects projectsData={this.props.projectsData} />
        <Donate />
				<Partners partnerImages={this.props.partnerImages}/>
      </Layout>
    );
	}
}
