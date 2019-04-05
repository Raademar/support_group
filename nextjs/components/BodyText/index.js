import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
        font-size: ${props => props.fontSize || '18px'};
        font-weight: ${props => props.fontWeight || 'regular'};
        background-color: ${props => props.backgroundColor || 'white'};
`

const BodyText = props => {
    console.log(props.BodyText)
    return (
        <BodyTextStyle>
            <h1>{props.BodyText}</h1>
        </BodyTextStyle>
    )
}
export default BodyText