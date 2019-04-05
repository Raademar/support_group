import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'

const HeroStyle = styled.section`
	padding: 0;
	margin: 0;
	width: 100vw;
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
		top: 6rem;
		margin: 0;
		color: #fff;
		width: 100vw;
	}
	& img {
		width: 100%;
		height: auto;
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
		<HeroStyle>
			<Heading heroText={props.heroText} />
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
