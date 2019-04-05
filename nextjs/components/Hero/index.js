import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeroStyle = styled.section`
	padding: 0;
	margin: 0;
	width: 100vw;
	height: auto;
	text-align: center;
	justify-content: center;
	position: relative;
	& img {
		width: 100%;
	}
	& div {
		position: absolute;
		bottom: 3rem;
	}
`

const Hero = props => {
	console.log(props.heroImage)
	return (
		<HeroStyle>
			<h2>{props.heroText}</h2>
			<h2> {props.heroSmallText}</h2>
			<img src={props.heroImage} />
			<div>
				<Button border={'2px solid black'} text="Bli medlem" />
				<Button border={'2px solid black'} text="Bli volontär" />
			</div>
		</HeroStyle>
	)
}
export default Hero
