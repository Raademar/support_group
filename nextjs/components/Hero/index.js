import Link from 'next/link'
import styled from 'styled-components'

const HeroStyle = styled.section`
	padding: 0;
	margin: 0;
    width: 100vw;
    text-align: center;
	justify-content: center;
`

const Hero = props => {
        return (
            <HeroStyle>
                <h2>{props.heroText}</h2>
                <h2> {props.heroSmallText}</h2>
                <img src={props.heroImage} />
            </HeroStyle>
        )
}
export default Hero
