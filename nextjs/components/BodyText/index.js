import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        width: ${props => props.width || '100%'};
   & p {
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 400};
        margin-top: ${props => props.marginTop || '22px;'};
        margin-left: ${props => props.marginLeft };
        margin-right: ${props => props.marginRight };
        margin-bottom: ${props => props.marginBottom};
        padding-bottom: ${props => props.paddingBottom};
        background-color: ${props => props.backgroundColor};
        position: ${props => props.position || 'relative'};
        color: ${props => props.color || '#393939'};
        text-align: ${props => props.textAlign || 'center'};
        line-height: ${props => props.lineHeight || '140%'};
        z-index: ${props => props.zIndex || ''};
        width: ${props => props.width};
        left: ${props => props.left};
        bottom : ${props => props.bottom};
        width : ${props => props.width};
        display : ${props => props.display};
        /* margin-right: 10em;
        margin-left: 10em; */
    }
`

const BodyText = props => {
    return (
        <BodyTextStyle {...props}>
            <p>{props.bodyText}</p>
        </BodyTextStyle>
    )
}
export default BodyText