import React, { Component } from 'react'
import Section from '../Section'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import styled from 'styled-components'
const StyledVolunteerPage = styled.div`
	overflow: ${props => (props.bodyScrollLocked ? 'hidden' : 'unset')};
	body {
		overflow: ${props => (props.bodyScrollLocked ? 'hidden' : 'unset')};
	}
	.volunteer-hero-colored-bg {
		min-height: ${props => (props.isDesktop ? '636px' : '583px')};
		position: relative;
		background: #fff;
	}
	.volunteer-person-inscope {
		background: #f2f2f2;
		min-height: 523px;
		position: relative;
		& .volunteer-person-quote {
			width: ${props => (props.isDesktop ? '340px' : '162px')};
			line-height: 130%;
			letter-spacing: 0.4px;
			font-weight: 200;
			position: absolute;
			left: ${props => (props.isDesktop ? '26%' : '6%')};
			top: ${props => (props.isDesktop ? '18%' : '10%')};
		}
		& .volunteer-person-quote-name {
			font-weight: 600;
			position: absolute;
			left: ${props => (props.isDesktop ? '26%' : '6%')};
			top: ${props => (props.isDesktop ? '34%' : '38%')};
		}
		& img {
			position: absolute;
			right: ${props => (props.isDesktop ? '5%' : '0')};
			bottom: ${props => (props.isDesktop ? '0' : '0')};
			width: ${props => (props.isDesktop ? '500px' : '100%')};
		}
	}
	.volunteer-hero-colored-bg:not(h1, div, p, button) {
		margin: 0;
	}
	.volunteer-bullet-points-mobile {
		background: #dfeafa;
		padding: 3em 0;
		.volunteers-mobile {
			margin-top: 1em;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 30px 1fr 1fr;
			display: grid;
			margin-left: 24px;
			margin-right: 24px;
			width: 90%;
			font-weight: 200;
			& p {
				grid-column: 2;
				margin: 0;
				font-weight: 200;
				max-width: 230px;
				line-height: 140%;
				letter-spacing: 0.04em;
			}
			& h3 {
				margin: 0;
			}
			& img {
				grid-row: 1/3;
			}
		}
	}
	.volunteer-bullet-points-desktop {
		margin-top: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 24px;
		margin-right: 24px;
		padding: 5em;
		& p {
			grid-column: 2;
			margin: 0;
		}
		& h3 {
			margin: 0;
		}
		& img {
			grid-row: 1/3;
		}
		& .volunteers-desktop {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			& p {
				text-align: center;
				font-weight: 200;
				width: 215px;
				line-height: 150%;
				letter-spacing: 0.05em;
			}
		}
		.volunteers-desktop > * {
			padding: 0.5em 0;
		}
	}
	svg {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.volunteer-if-is-desktop {
		width: 100%;
		position: absolute;
		top: 17%;
		left: 7%;
		.volunteers-desktop-quote {
			width: 340px;
			left: 26%;
		}
		.volunteers-desktop-quote-name {
			left: 26%;
			top: 42%;
		}
		img {
			height: 500px;
			right: 12%;
			bottom: 0;
		}
	}
	.hero-image-volunteer-page {
		width: 100%;
	}
`

const VolunteerPage = props => {
	if (props.aboutData) {
		const { acf } = props.volunteerData[0]
		console.log(acf)
		return (
			<StyledVolunteerPage {...props}>
				<div className="volunteer-hero-colored-bg">
					<Section>
						<div className={props.isDesktop ? 'volunteer-if-is-desktop' : ''}>
							<Heading
								textAlign="left"
								position="relative"
								heroText="BECOME A VOLUNTEER"
								width="90%"
								paddingTop="32px"
								color="black"
								marginTop="0"
							/>
							<BodyText
								position="relative"
								bodyText={props.aboutData[0].content.rendered}
								textAlign="left"
								width={props.isDesktop ? '505px' : '96%'}
								lineHeight="170%"
								zIndex="3"
							/>
							<Button
								color="#1b1b1b"
								fontSize="16px"
								width="198px"
								height="52px"
								text="Become a volunteer"
								marginTop="45px"
								marginBottom="80px"
								zIndex="2"
								onClick={props.toggleModal}
							/>
						</div>
					</Section>
					<img
						className="hero-image-volunteer-page"
						src={acf.hero_image_volunteer_page.sizes.medium}
						alt={acf.hero_image_volunteer_page.filename}
					/>
				</div>
				<div
					className={
						props.isDesktop
							? 'volunteer-bullet-points-desktop'
							: 'volunteer-bullet-points-mobile'
					}
				>
					{props.volunteerPercs.map((item, index) => (
						<div
							className={
								props.isDesktop ? 'volunteers-desktop' : 'volunteers-mobile'
							}
							key={index}
						>
							<img src={`${item.acf.image.sizes.thumbnail}`} />
							<h3>{item.title.rendered}</h3>
							<p key={index}>{`${item.content.rendered}`}</p>
						</div>
					))}
				</div>
				<div className="volunteer-person-inscope">
					<p className="volunteer-person-quote">
						“As a volunteer i get a democratic possibility to vote. That
						together with all fun activities makes my volunteership a great
						thing.”
					</p>
					<p className="volunteer-person-quote-name">Kasim Pontiga </p>
					<img
						src={acf.bottom_image_volunteer_page.sizes.large}
						alt={acf.bottom_image_volunteer_page.filename}
					/>
				</div>
			</StyledVolunteerPage>
		)
	} else {
		return null
	}
}

export default VolunteerPage
