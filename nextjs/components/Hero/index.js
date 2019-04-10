import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'

const HeroStyle = styled.section`
	padding: 0;
	margin: 0;
	height: auto;
	text-align: center;
	position: relative;

	& h2 {
		color: #fff;
		position: absolute;
		top: 4rem;
		margin: 0;
		width: 100vw;
	}
	& h4 {
		position: absolute;
		top: 12rem;
		margin: 0;
		color: #fff;
		width: 100%;
		text-align: center;
	}
	& img {
		width: ${props => props.isDesktop ? null : '100%'};
		height: auto;
		left: 0px;
		top: 0px;
		z-index: 0;
		max-height: 95vh;
	}
	& div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 3rem;
		width: 100%;
	}
`

const Hero = props => {
	console.log(props.heroText)
	return (
		<HeroStyle {...props}>
			<Heading heroText={props.heroText} top="3rem" fontSize="36px" />
			<h4>{props.heroSmallText}</h4>
			<img src={props.heroImage} />
			<div>
				<Button width="198px" height="52px" text="Bli medlem" primary />
				<Button width="198px" height="52px" text="Bli volontär" />
			</div>
		</HeroStyle>
	)
}
export default Hero
