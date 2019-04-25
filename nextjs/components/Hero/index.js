import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'

const HeroStyle = styled.section`
  padding: 0;
  margin: 0;
  height:90vh;
  text-align: center;
  position: relative;
  padding-top: 80px;
  background: #fff;
  /* background: #dfeafa; */
  z-index:1;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & h1 {
      width: ${props => (props.isDesktop ? "60%" : null)};

    }
    & h4 {
      position: relative;
      font-size: ${props => (props.isdesktop ? "64px" : "16px")};
      /* top: ${props => (props.isDesktop ? "19rem" : "10rem")}; */
      margin-top: 3%;
      margin-bottom: 13%;
      color: #393939;
      width: ${props => (props.isDesktop ? "40%" : "90%")};
      text-align: center;
      letter-spacing: 0.04em;
      line-height: 27px;
      z-index: 3;
      position:relative;
      font-weight: 400;
    }
    /* & img {
      width: ${props => (props.isDesktop ? null : "")};
      left: 0px;
      max-height: 100vh;
    } */

    & div {
      position: relative;
      z-index: 1;
      display: ${props => (props.isDesktop ? "flex" : null)};
      flex-direction: ${props => (props.isDesktop ? "row" : null)};
      & button {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }
  .imgDiv{
      overflow: hidden;
      width: ${props => (props.isDesktop ? "50vw" : "100vw")};
      position: absolute; 
      text-align: center;
      z-index: 1;
      bottom: 0;
      left:0;right:0;
      margin-left:auto;
      margin-right:auto;
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
  #heroText{
    font-size: ${props => (props.isDesktop ? "64px" : "36px")};
    margin-top: ${props => (props.isDesktop ? "5%" : "14%")};
    font-family: ${props => props.fontFamily || "'Paytone One', sans-serif"};
    /* isDesktop={props.isDesktop} */
    position: relative;
    font-weight: normal;
  }
  .heroTextFirstWord{
    color: #3D73CF;
  }
`;
// console.log(document.getElementById(heroText));

if (typeof window !== "undefined" && location.path === "/") {
  function firstWordFromId(selectId, addClass) {
    var firstWord = document.getElementById(selectId);
    var originalString = firstWord.innerHTML;
    var splitWords = originalString.split(" ");

    firstWord.innerHTML =
      "<span class=" +
      addClass +
      ">".concat(splitWords[0], "</span>") +
      "&#32;" +
      originalString.substr(originalString.indexOf(" ") + 1);
  }
  firstWordFromId("heroText", "heroTextFirstWord");
}
  
const Hero = props => {
	return (
    <HeroStyle {...props}>
      <div className="infoBox">
        <h1 
          id="heroText"
          >
          {props.heroText}

        </h1>
        {/* <Heading
					fontSize={props.isDesktop ? '64px' : '36px'}
					className="firstWord"
					heroText={props.heroText}
					marginTop={props.isDesktop ? '5%' : '18%'}
					// top="3rem"
					isDesktop={props.isDesktop}
					position="relative"
					fontWeight="normal"
				/> */}
        <h4>{props.heroSmallText}</h4>
        <div>
          <Link href="/member">
            <Button
              width="198px"
              height="52px"
              text="BECOME A MEMBER"
              fontSize="14px"
              primary
            />
          </Link>
          <Link href="/volunteer">
            <Button
              width="198px"
              height="52px"
              text="BECOME A VOLUNTEER"
              fontSize="14px"
              color="black"
            />
          </Link>
        </div>
      </div>
      <div className="imgDiv">
        <img src={props.heroImage} />
      </div>
    </HeroStyle>
  );
}
export default Hero
