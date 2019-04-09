import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        width: ${props => props.width || '100%'};
    &p{
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 'regular'};
        margin-top: ${props => props.marginTop || '22px'};
        background-color: ${props => props.backgroundColor};
        position: ${props => props.position || 'relative'};
        color: ${props => props.color || '#393939'};
        text-align: ${props => props.textAlign || 'center'};
        line-height: ${props => props.lineHeight || '140%'};
    }

`

const BodyText = props => {
    return (
        <BodyTextStyle>
            <p {...props}>{props.bodyText}</p>
        </BodyTextStyle>
    )
}
export default BodyText