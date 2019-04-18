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

const StyledButton = styled.a`
	width: 319px;
	height: 50px;
	border: 4px solid #3d73cf;
	background-color: #fff;
	color: #3d73cf;
	font-weight: 900;
	font-size: 16px;
	font-family: Lato;
	border-radius: 8px;
	margin: 0 auto;
	margin-top: 24px;
	margin-bottom: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`

const About = props => {
	if (props.pageData) {
		// console.log(props.pageData)

		return (
			<div>
				<AboutStyle>
					<Section>
						<Heading
							position="relative"
							heroText={props.pageData.title.rendered.toUpperCase()}
							letterSpacing="4px"
							marginTop="26%"
						/>
						{/* <Image position="relative" image={props.aboutImage} /> */}
						<BodyText bodyText={props.pageData.content.rendered} />
					</Section>
				</AboutStyle>
				<StyledButton href="/about">READ MORE ABOUT OUR WORK</StyledButton>
			</div>
		)
	} else {
		return null
	}
}

export default About
