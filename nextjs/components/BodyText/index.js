import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        width: ${props => props.width || '100%'};
    p{
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 'regular'};
        margin-top: ${props => props.marginTop || '22px;'};
        background-color: ${props => props.backgroundColor || 'white'};
        position: ${props => props.position || 'relative'};
        color: ${props => props.color || '#393939'};
        text-align: ${props => props.textAlign || 'center'};
        width: 100%;
    }

`

const BodyText = props => {
    return (
        <BodyTextStyle>
            <p>{props.bodyText}</p>
        </BodyTextStyle>
    )
}
export default BodyText