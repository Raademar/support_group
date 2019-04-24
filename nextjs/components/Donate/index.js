import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const DonateStyle = styled.div`
	margin: 0 auto;
	background-color: ${props => props.backgroundColor || 'white'};
	margin-top: 3em;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		width: ${props => (props.isDesktop ? '385px' : '165px')};
		height: 50px;
		left: 106px;
		top: 6224px;
		/* Donation green */
		background: #12e7b4;
		color: #fff;
		font-weight: 900;
		font-size: 16px;
		font-family: Lato;
		border-radius: 8px;
		border: none;
		margin-top: 14%;
		margin-bottom: 18%;
		&:hover {
			background-color: white;
			color: #12e7b4;
			border: 4px solid #12e7b4;
		}
	}
	.donateButtonDiv {
		padding-bottom: ${props => (props.isDesktop ? '0%' : '18%')};
	}
	a {
		text-decoration: none;
	}
`

const Donate = props => {
	return (
		<DonateStyle {...props}>
			<Section paddingTop="24px">
				<Heading
					marginTop="5%"
					position="relative"
					heroText="DONATE TO US"
					letterSpacing="4px"
					marginBottom="10%"
				/>
				{/* <Image position="relative" image={props.donateImage} /> */}
				<BodyText
					bodyText="Support our work. We appreciate all donations. Your donation helps us make a better future for everyone."
					fontSize="16px"
					lineHeight="27px"
					textAlign="center"
					letterSpacing="0.04em"
				/>
				<div className="donateButtonDiv">
					<Link href="/donate">
						<a href="/donate">
							<button>DONATE TO US</button>
						</a>
					</Link>
				</div>
			</Section>
		</DonateStyle>
	)
}

export default Donate
