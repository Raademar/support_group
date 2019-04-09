import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        width: ${props => props.width || '100%'};
    &p{
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 400};
        margin-top: ${props => props.marginTop || '22px;'};
        background-color: ${props => props.backgroundColor || 'white'};
        position: ${props => props.position || 'relative'};
        color: ${props => props.color || '#393939'};
        text-align: ${props => props.textAlign || 'center'};
        line-height: ${props => props.lineHeight || '140%'};
    }

`

const BodyText = props => {
    return (
<<<<<<< HEAD
        <BodyTextStyle>
            <p {...props}>{props.bodyText}</p>
=======
        <BodyTextStyle {...props}>
            <p>{props.bodyText}</p>
>>>>>>> de6f6ac8af1c166550098b3945d829aa2b28b669
        </BodyTextStyle>
    )
}
export default BodyText