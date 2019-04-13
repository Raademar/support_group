import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import ActivitiesPopup from '../ActivitiesPopup'

const ActivitiesPopupBoxStyle = styled.section`
  font-size: ${props => (props.isDesktop ? "64px" : "24px")};
  font-weight: ${props => props.fontWeight || "bold"};
  color: ${props => props.color || "#558FF0"};
  background-color: ${props => props.backgroundColor};
  font-family: ${props => props.fontFamily || "'Paytone One', sans-serif"};
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
`;



const ActivitiesPopupBox = props => {
    console.log('hej', props.item)



    return (
      <ActivitiesPopupBoxStyle {...props}>
        <h1>{`${props.item.title.rendered}`}</h1>

        <ActivitiesPopup 
                    item={props.item}
                />
      </ActivitiesPopupBoxStyle>
    );
}
export default ActivitiesPopupBox
