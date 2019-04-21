import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'

const HeroStyle = styled.section`
  padding: 0;
  margin: 0;
  height: 100vh;
  text-align: center;
  position: relative;
  padding-top: 80px;
  background: #dfeafa;
  z-index:1;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & h1 {
      width: ${props => (props.isDesktop ? '50%' : null)};

    }
    & h4 {
      position: relative;
      font-size: ${props => (props.isdesktop ? '64px' : '16px')};
      /* top: ${props => (props.isDesktop ? '19rem' : '10rem')}; */
      margin-top: 8%;
      margin-bottom: 8%;
      color: #393939;
      width: ${props => (props.isDesktop ? '25%' : '90%')};
      text-align: center;
      letter-spacing: 0.04em;
      line-height: 27px;
      z-index: 3;
      position:relative;
      font-weight: 400;
    }
    /* & img {
      width: ${props => (props.isDesktop ? null : '')};
      left: 0px;
      max-height: 100vh;
    } */

    & div {
      position: relative;
      z-index: 1;
      display: ${props => (props.isDesktop ? 'flex' : null)};
      flex-direction: ${props => (props.isDesktop ? 'row' : null)};
      & button {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }
  .imgDiv{
      overflow: hidden;
      width: 100vw;
      position: absolute; 
      z-index: 1;
      bottom: 0;
      img {
        width: 100%;

      }
    }
  .infoBox{
    position: absolute;
    z-index: 3;
    width: 100vw;
    overflow: hidden;
  }
`

const Hero = props => {
	return (
		<HeroStyle {...props}>
			<div className="infoBox">
				<Heading
					fontSize={props.isDesktop ? '64px' : '36px'}
					className="firstWord"
					heroText={props.heroText}
					marginTop="18%"
					// top="3rem"
					isDesktop={props.isDesktop}
					position="relative"
				/>
				<h4>{props.heroSmallText}</h4>
				<div>
					<Button width="198px" height="52px" text="Bli medlem" primary />
					<Button
						width="198px"
						height="52px"
						text="Bli volontär"
						color="black"
					/>
				</div>
			</div>
			<div className="imgDiv">
				<img src={props.heroImage} />
			</div>
		</HeroStyle>
	)
}
export default Hero
