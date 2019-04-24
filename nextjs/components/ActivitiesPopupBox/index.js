import styled from 'styled-components'
import BodyText from '../BodyText'
import Heading from '../Heading'

const ActivitiesPopupBoxStyle = styled.section`
  font-size: ${props => (props.isDesktop ? "64px" : "24px")};
  font-weight: ${props => props.fontWeight || "bold"};
  color: ${props => props.color || "#558FF0"};
  background-color: ${props => props.backgroundColor};
  position: ${props => (props.isDesktop ? "fixed" : "fixed")};
  top: ${props => props.top};
  left: ${props => props.left};
  padding-top: ${props => props.paddingTop};
  text-align: ${props => props.textAlign || "center"};
  letter-spacing: ${props => props.letterSpacing || "initial"};
  line-height: ${props => props.lineHeigt || "140%"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  margin-top: ${props => props.marginTop || "0"};
  margin-left: ${props => props.marginLeft};
  margin-bottom: ${props => props.marginBottom};
  left: ${props => props.left || "0"};
  z-index: ${props => props.zIndex};
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
  text-align: ${props => (props.isDesktop ? "left" : "center")};
  align-content: center;
  justify-items: center;

  .imgPopup {
    border-radius: 0%;
    width: 100%;
    margin-top: 10px;
  }
  .imgPopupBox {
    position: fixed;
    width: ${props => props.isDesktop ? "30vw" : "88%"};
    margin-left: ${props => (props.isDesktop ? "10vw" : "6%")};
    top: ${props => (props.isDesktop ? "26vh" : "")};
    left: ${props => (props.isDesktop ? "5%" : "")};
    width: ${props => (props.isDesktop ? "%" : "")};
  }
  .infoPopupBox {
    width: ${props => (props.isDesktop ? "70%" : "")};
    left: ${props => (props.isDesktop ? "50%" : "")};
  }
  .closeImgPopup {
    position: fixed;
    top: 20.5vh;
    left: ${props => (props.isDesktop ? "85vw" : "83vw")};
    width: auto;
  }
  .symbol {
    position: fixed;
    top: ${props => (props.isDesktop ? "22vh" : "16.5vh")};
    left: ${props => (props.isDesktop ? "" : "7vw")};
    width: ${props => (props.isDesktop ? "100px" : "20vw")};
  }
`;

const ActivitiesPopupBox = props => {
	// console.log(`reeee ---- --- --- ${props.isDesktop}`)
	return (
    <ActivitiesPopupBoxStyle {...props} onClick={props.closePopup}>
      <div className="infoPopupBox">
        <img className="symbol" src={`${props.item.acf.symbol.url}`} />
        <Heading
          heroText={props.item.title.rendered}
          fontSize={props.isDesktop ? "24px" : "20px"}
          position="relative"
          marginTop={props.isDesktop ? "22vh" : "16vh"}
          marginLeft={props.isDesktop ? "0" : "20px"}
          marginRight="17%"
          textAlign="left"
          color="#393939"
          width="66%"
        />
        <BodyText
          bodyText={props.item.content.rendered}
          position={props.isDesktop ? "relative" : ""}
          textAlign="left"
          marginLeft={props.isDesktop ? "0" : "20px"}
          marginRight="8.6vw"
        />
        <img
          className="closeImgPopup"
          onClick={props.closePopup}
          src="/static/images/kryss.png"
          alt=""
        />
      </div>
      <div className="imgPopupBox">
        <img
          className="imgPopup"
          src={`${props.item.acf.image.sizes.large}`}
        />
      </div>
    </ActivitiesPopupBoxStyle>
  );
}
export default ActivitiesPopupBox
