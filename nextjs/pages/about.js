import About from '../components/About'
import News from '../components/News'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import React, { Component } from 'react'
import axios from 'axios'
import Volunteer from '../components/Volunteer'
import Member from '../components/Member'
import Activities from '../components/Activities'
import Section from '../components/Section'
import VolunteerMember from '../components/VolunteerMember'
import AboutPage from '../components/AboutPage'
import BodyText from '../components/BodyText'
import Heading from '../components/Heading'
import styled from 'styled-components'
import Navigation from '../components/Navigation'

export default class extends Component {
	// Resolve promise and get initial props
	static async getInitialProps({ req }) {
		// Make request for props

		const aboutData = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/about`
		)
		const whatWeDo = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=what-we-do`
		)
		const background = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=background`
		)
		const ourVision = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=our-vision`
		)
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)
		const activities = await axios.get(
      `http://${process.env.HOSTNAME}/wp-json/wp/v2/activities`
    );

		// Return the data

		return {
      aboutData: aboutData.data,
      whatWeDo: whatWeDo.data,
      background: background.data,
      ourVision: ourVision.data,
      pages: pages.data,
      activities: activities.data
    };
	}

	render() {
		const members = this.props.aboutData

		const missionData = members.filter(member => member.acf.is_of_type_mission)

		return (
      <Layout navigationMenu={this.props.pages}>
        <AboutPage
          missionData={missionData}
          whatWeDo={this.props.whatWeDo}
          background={this.props.background}
          ourVision={this.props.ourVision}
          pages={this.props.pages}
          isDesktop={this.props.isDesktop}
        />
        <Activities activitiesData={this.props.activities} />
      </Layout>
    );
	}
}
