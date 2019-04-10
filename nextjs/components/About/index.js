import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const AboutStyle = styled.div`
	margin: 0 auto;
	background-color: ${props => props.backgroundColor || 'white'};
	margin-top: 3em;
`

const About = props => {
	if (props.pageData) {
		console.log(props.pageData)

		return (
			<AboutStyle>
				<Section>
					<Heading
						position="relative"
						heroText={props.pageData.title.rendered.toUpperCase()}
						letterSpacing='4px'
						
					/>
					{/* <Image position="relative" image={props.aboutImage} /> */}
					<BodyText
						bodyText={props.pageData.content.rendered}
					/>
					{/* <Button /> */}
				</Section>
			</AboutStyle>
		)
	} else {
		return null
	}
}

export default About
