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

		// Return the data

		return {
			aboutData: aboutData.data,
			whatWeDo: whatWeDo.data,
			background: background.data,
			ourVision: ourVision.data,
			pages: pages.data
		}
	}

	render() {
		const members = this.props.aboutData

		const missionData = members.filter(member => member.acf.is_of_type_mission)

		// const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
		//   .source_url;
		return (
			<div>
				<Navigation />
				<AboutPage
					missionData={missionData}
					whatWeDo={this.props.whatWeDo}
					background={this.props.background}
					ourVision={this.props.ourVision}
					pages={this.props.pages}
				/>
			</div>
		)
	}
}

//   render() {
//     console.log();
//     // const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
//     //   .source_url;
//     return (
//       <Layout navigationMenu={this.props.pages}>
//         <Section>
//           <Heading
//             heroText={this.props.whatWeDo[0].title.rendered}
//             left="0"
//             position="relative"
//             marginTop="1em"
//           />
//           <BodyText
//             bodyText={this.props.whatWeDo[0].content.rendered}
//             lineHeight="180%"
//             marginLeft="5%"
//             textAlign="left"
//             fontSize="18"
//             width="90%"
//             paddingBottom="2em"
//           />
//         </Section>
//         <Section
//           backgroundColor="#F2F2F2"
//           width="100%"
//           left="0"
//           marginLeft="0"
//           marginRight="0"
//         >
//           <img src={this.props.background[0].acf.image} />
//           <Heading
//             heroText={this.props.background[0].title.rendered}
//             left="0"
//             position="relative"
//             textAlign="left"
//             marginLeft="5%"
//             color="#1c1c1c"
//             fontSize="24px"
//             width="90%"
//           />
//           <BodyText
//             bodyText={this.props.background[0].content.rendered}
//             lineHeight="180%"
//             marginLeft="5%"
//             textAlign="left"
//             fontSize="18"
//             width="80%"
//             paddingBottom="5em"
//           />
//         </Section>
//         <Section
//           backgroundColor="#fff"
//           width="100%"
//           left="0"
//           marginLeft="0"
//           marginRight="0"
//         >
//           <img src={this.props.ourVision[0].acf.image}

//           />
//           <Heading
//             heroText={this.props.ourVision[0].title.rendered}
//             left="0"
//             position="relative"
//             textAlign="left"
//             marginLeft="5%"
//             color="#1c1c1c"
//             fontSize="24px"
//             width="90%"
//             marginTop="0"
//           />
//           <BodyText
//             bodyText={this.props.ourVision[0].content.rendered}
//             lineHeight="180%"
//             marginLeft="5%"
//             textAlign="left"
//             fontSize="18"
//             width="90%"
//             paddingBottom="5em"
//           />
//         </Section>
//       </Layout>
//     );
//   }
// }
