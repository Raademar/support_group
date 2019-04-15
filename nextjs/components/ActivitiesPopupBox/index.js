import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import ActivitiesPopup from '../ActivitiesPopup'
import BodyText from '../BodyText';
import Heading from '../Heading';

const ActivitiesPopupBoxStyle = styled.section`
  font-size: ${props => (props.isDesktop ? "64px" : "24px")};
  font-weight: ${props => props.fontWeight || "bold"};
  color: ${props => props.color || "#558FF0"};
  background-color: ${props => props.backgroundColor};
  position: ${props => props.position || "absolute"};
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

  .imgPopup {
    border-radius: 0%;
    margin-top: 10px;
  }
  .closeImgPopup {
    position: fixed;
    border-radius: 0%;
    top: 16.5vh;
    left: 83vw;
    width: auto;
  }
`;



const ActivitiesPopupBox = props => {
    // console.log('hej', props.item)

    return (
      <ActivitiesPopupBoxStyle {...props}>
        <Heading
            heroText={props.item.title.rendered}
            position="relative"
            marginTop="28px"
            marginLeft="17%"
            marginRight="17%"
            width="66%"
        />
        <img
          className="imgPopup"
          src={`${props.item.acf.image.sizes.medium}`}
        />
        <BodyText
          bodyText={props.item.content.rendered}
          textAlign="left"
          marginLeft="8.6vw "
          marginRight="8.6vw"

        />

            <img className="closeImgPopup" onClick={props.closePopup} src="/static/images/kryss.png" alt="" />
      </ActivitiesPopupBoxStyle>
    );
}
export default ActivitiesPopupBox
