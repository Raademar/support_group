import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const VolunteerStyle = styled.div`
	margin: 0 auto;
	height: 100vh;
	background-color: ${props => props.backgroundColor || '#3D73CF'};
	width: ${props => (props.isDesktop ? '50vw' : '100vw')};
	left: ${props => (props.isDesktop ? '0' : '')};
	position: relative;

	svg {
		position: absolute;
		z-index: 1;
		margin-top: -109px;
		left: 0;
		bottom: 0;
		display: ${props => (props.isDesktop ? 'none' : '')};
	}

	img {
		position: absolute;
		bottom: 0;
		z-index: 99;
		width: 90%;
		left: 0;
	}
`

const Volunteer = props => {
	if (props.pageData) {
		const { acf } = props.volunteerData[0]
		console.log(acf)

		return (
			<VolunteerStyle {...props}>
				<Section
					backgroundColor="#3D73CF"
					marginLeft={props.isDesktop ? '16%' : ''}
					paddingTop="24px"
				>
					<Heading
						textAlign="left"
						position="relative"
						heroText="BECOME A VOLUNTEER"
						width={props.isDesktop ? '60%' : '70%'}
						paddingTop={props.isDesktop ? '16%' : '46px'}
						color="#fff"
						marginTop="0"
						fontSize={props.isDesktop ? '36px' : ''}
						// heroText={props.pageData.title.rendered}
					/>
					<BodyText
						position="relative"
						textAlign="left"
						width={props.isDesktop ? '80%' : '96%'}
						color="#fff"
						marginTop="18px"
						lineHeight={props.isDesktop ? '180%' : '140%'}
						bodyText={props.pageData.content.rendered}
					/>
					<Link href="/volunteer">
						<Button
							position="absolute"
							color="#000"
							fontSize="16px"
							width="198px"
							height="52px"
							text="BECOME A VOLUNTEER"
							marginTop="12%"
							marginBottom="90px"
							zIndex="3"
						/>
					</Link>
					<Image position="relative" image={props.VolunteerImage} />
					<BodyText
						position="absolute"
						bodyText="“As a member i get a democratic possibility to vote. That together with all fun activities makes my membership a great thing.” Kajsa Nilsson"
						textAlign="left"
						fontSize={props.isDesktop ? '20px' : '14px'}
						zIndex="3"
						marginBottom="24%"
						width="163px"
						left="46%"
						lineHeight="150%"
						bottom="0"
					/>
					<img
						src={acf.landing_page_image.sizes.medium}
						alt={acf.landing_page_image.filename}
					/>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 317.7">
						<path
							d="M0 317l.9.6h345.8V198.3c3.1-64.8-16.5-188-119.8-162.7C97.8 67.2 55.2 46.1 10.5 7.7 7.1 4.8 3.6 2.2 0 0v317z"
							fill="#fff"
						/>
					</svg>
				</Section>
			</VolunteerStyle>
		)
	} else {
		return null
	}
}

export default Volunteer
