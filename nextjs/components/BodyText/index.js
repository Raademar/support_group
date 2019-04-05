import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 'regular'};
        background-color: ${props => props.backgroundColor || 'white'};
`

const BodyText = props => {
    return (
        <BodyTextStyle>
            <p>{props.bodyText}</p>
        </BodyTextStyle>
    )
}
export default BodyText