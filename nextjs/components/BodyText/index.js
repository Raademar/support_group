import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        width: ${props => props.width || '100%'};
    p{
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 400};
        margin-top: ${props => props.marginTop || '22px;'};
        margin-bottom: ${props => props.marginBottom};
        background-color: ${props => props.backgroundColor};
        position: ${props => props.position || 'relative'};
        color: ${props => props.color || '#393939'};
        text-align: ${props => props.textAlign || 'center'};
        line-height: ${props => props.lineHeight || '140%'};
        z-index: ${props => props.zIndex || ''};
        width: ${props => props.width};
        left: ${props => props.left};
        bottom : ${props => props.bottom};
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