import React, { Component } from 'react'
import Section from '../Section'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import styled from 'styled-components'

const StyledMemberPage = styled.div`
	overflow: ${props => (props.bodyScrollLocked ? 'hidden' : 'unset')};
	body {
		overflow: ${props => (props.bodyScrollLocked ? 'hidden' : 'unset')};
	}
	.member-hero-colored-bg {
		min-height: ${props => (props.isDesktop ? '636px' : '583px')};
		position: relative;
		background: #fff;
	}
	.member-person-inscope {
		background: #f2f2f2;
		min-height: 523px;
		position: relative;
		& .member-person-quote {
			width: ${props => (props.isDesktop ? '340px' : '162px')};
			line-height: 130%;
			letter-spacing: 0.4px;
			font-weight: 200;
			position: absolute;
			left: ${props => (props.isDesktop ? '26%' : '6%')};
			top: ${props => (props.isDesktop ? '18%' : '13%')};
		}
		& .member-person-quote-name {
			font-weight: 600;
			position: absolute;
			left: ${props => (props.isDesktop ? '26%' : '6%')};
			top: ${props => (props.isDesktop ? '34%' : '42%')};
		}
		& img {
			position: absolute;
			right: ${props => (props.isDesktop ? '5%' : '0')};
			bottom: ${props => (props.isDesktop ? '0' : '0')};
			width: 100%;
		}
	}
	.member-hero-colored-bg:not(h1, div, p, button) {
		margin: 0;
	}
	.member-bullet-points-mobile {
		background: #dfeafa;
		padding: 3em 0;
		.members-mobile {
			margin-bottom: 1em;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 30px 1fr 1fr;
			display: grid;
			margin-left: 24px;
			margin-right: 24px;
			width: 90%;
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
	.member-bullet-points-desktop {
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
		& .members-desktop {
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
		.members-desktop > * {
			padding: 0.5em 0;
		}
	}
	svg {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.member-if-is-desktop {
		width: 100%;
		position: absolute;
		top: 17%;
		left: 7%;
		.members-desktop-quote {
			width: 340px;
			left: 26%;
		}
		.members-desktop-quote-name {
			left: 26%;
			top: 42%;
		}
		img {
			height: 500px;
			right: 12%;
			bottom: 0;
		}
	}
	.hero-image-member-page {
		width: 100%;
	}
`

const MemberPage = props => {
	if (props.aboutData) {
		const { acf } = props.memberData[0]
		// console.log(acf)
		return (
			<StyledMemberPage {...props}>
				<div className="member-hero-colored-bg">
					<Section>
						<div className={props.isDesktop ? 'member-if-is-desktop' : ''}>
							<Heading
								textAlign="left"
								position="relative"
								heroText="BECOME A MEMBER"
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
								color="#fff"
								fontSize="16px"
								width="198px"
								height="52px"
								text="Become a member"
								marginTop="45px"
								marginBottom="80px"
								zIndex="2"
								primary
								onClick={props.toggleModal}
							/>
						</div>
					</Section>
					<img
						className="hero-image-member-page"
						src={acf.hero_image_member_page.sizes.medium}
						alt={acf.hero_image_member_page.filename}
					/>
				</div>
				<div
					className={
						props.isDesktop
							? 'member-bullet-points-desktop'
							: 'member-bullet-points-mobile'
					}
				>
					{props.memberPercs.map((item, index) => (
						<div
							className={props.isDesktop ? 'members-desktop' : 'members-mobile'}
							key={index}
						>
							<img src={`${item.acf.image.sizes.thumbnail}`} />
							<h3>{item.title.rendered}</h3>
							<p key={index}>{`${item.content.rendered}`}</p>
						</div>
					))}
				</div>
				<div className="member-person-inscope">
					<p className="member-person-quote">
						“As a member i get a democratic possibility to vote. That together
						with all fun activities makes my membership a great thing.”
					</p>
					<p className="member-person-quote-name">Kasim Pontiga </p>
					<img
						src={
							props.isDesktop
								? '/static/images/member_in_scope_desktop.png'
								: acf.member_page_bottom_image.sizes.large
						}
						alt=""
					/>
				</div>
			</StyledMemberPage>
		)
	} else {
		return null
	}
}

export default MemberPage
