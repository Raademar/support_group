import React, { Component } from 'react'
import Section from '../Section'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import styled from 'styled-components'
const StyledMemberPage = styled.div`
	.member-hero-colored-bg {
		min-height: ${props => (props.isDesktop ? '636px' : '583px')};
		position: relative;
		background: #ffdd7e;
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
			top: ${props => (props.isDesktop ? '18%' : '18%')};
		}
		& .member-person-quote-name {
			font-weight: 600;
			position: absolute;
			left: ${props => (props.isDesktop ? '26%' : '6%')};
			top: ${props => (props.isDesktop ? '34%' : '42%')};
		}
		& img {
			position: absolute;
			right: ${props => (props.isDesktop ? '5%' : '1%')};
			bottom: ${props => (props.isDesktop ? '0' : '30%')};
			width: ${props => props.isDesktop && '500px'};
		}
	}
	.member-hero-colored-bg:not(h1, div, p, button) {
		margin: 0;
	}
	.member-bullet-points-mobile {
		background: #fff;
		/* display: flex;
		justify-content: center; */
		.members-mobile {
			margin-top: 1em;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 1fr 1fr 1fr;
			display: grid;
			margin-left: 24px;
			margin-right: 24px;
			width: 90%;
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
		padding: 4em;
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
				width: 286px;
				line-height: 140%;
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
`

const MemberPage = props => {
	if (props.aboutData) {
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
							/>
						</div>
						{!props.isDesktop && (
							<svg
								width="339"
								height="242"
								viewBox="0 0 339 242"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M828.516 242H630.393H0C25.8033 237.425 80.0924 205.352 90.8225 113.655C104.235 -0.966751 218.051 -23.0777 289.712 21.3984C361.374 65.8745 429.587 90.2729 636.524 53.6754C802.074 24.3974 833.498 167.026 828.516 242Z"
									fill="white"
								/>
							</svg>
						)}
						{props.isDesktop && (
							<svg
								width="884"
								height="494"
								viewBox="0 0 884 494"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1694.01 494H1288.92H0C52.7583 484.662 163.76 419.189 185.699 232.006C213.123 -1.97345 445.834 -47.1091 592.355 43.681C738.877 134.471 878.347 184.276 1301.46 109.569C1639.95 49.8029 1704.2 340.954 1694.01 494Z"
									fill="white"
								/>
							</svg>
						)}
					</Section>
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
								: '/static/images/member_in_scope.png'
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
