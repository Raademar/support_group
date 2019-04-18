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
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & h1 {
      width: ${props => (props.isDesktop ? "50%" : null)};
    }
    & h4 {
      position: absolute;
      font-size: ${ props => props.isdesktop? "64px" : "16px"};
      top: ${props => (props.isDesktop ? "19rem" : "12rem")};
      margin: 0;
      color: #fff;
      width: ${props => (props.isDesktop ? "25%" : "60%")};
      text-align: center;
    }
    & img {
      width: ${props => (props.isDesktop ? null : "100%")};
      height: auto;
      left: 0px;
      top: 0px;
      max-height: 95vh;
    }
    & div {
      position: absolute;
      bottom: 3rem;
      display: ${props => (props.isDesktop ? "flex" : null)};
      flex-direction: ${props => (props.isDesktop ? "row" : null)};
      & button {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }
`;


const Hero = props => {
	console.log(props.heroText)
	return (
    <HeroStyle {...props}>
      <div>
        <Heading
          fontSize={props.isDesktop ? "64px" : "36px"}
          className="firstWord"
          heroText={props.heroText}
          top="3rem"
          isDesktop={props.isDesktop}
        />
        <h4>{props.heroSmallText}
			
		</h4>
        <img src={props.heroImage} />
        <div>
          <Button width="198px" height="52px" text="Bli medlem" primary />
          <Button width="198px" height="52px" text="Bli volontär" />
        </div>
      </div>
    </HeroStyle>
  );
}
export default Hero
