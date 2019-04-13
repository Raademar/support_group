import React, { Component } from 'react'
import Section from '../Section'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import styled from 'styled-components'
const StyledMemberPage = styled.div`
	background: #ffdd7e;
	.member-hero-colored-bg {
		min-height: 583px;
		position: relative;
	}
	.member-hero-colored-bg:not(h1, div, p, button) {
		margin: 0;
	}
	.member-bullet-points {
		background: #fff;
		& .members {
			margin-top: 1em;
			grid-template-columns: 1fr 3fr;
			display: grid;
			align-items: center;
			margin-left: 24px;
			margin-right: 24px;
			width: 90%;
		}
	}
	svg {
		position: absolute;
		bottom: 0;
		right: 0;
	}
`

const MemberPage = props => {
	{
		console.log(props.memberPercs)
	}
	if (props.aboutData) {
		return (
			<StyledMemberPage>
				<Section>
					<div className="member-hero-colored-bg">
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
							width="96%"
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
					</div>
					<div className="member-bullet-points">
						{props.memberPercs.map((item, index) => (
							<div className="members">
								<img src={`${item.acf.image.sizes.thumbnail}`} />
								<p key={index}>{`${item.content.rendered}`}</p>
							</div>
						))}
					</div>
				</Section>
			</StyledMemberPage>
		)
	} else {
		return null
	}
}

export default MemberPage
