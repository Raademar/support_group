import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.div `
        font-size: ${props => props.fontSize || '36px'};
        font-weight: ${props => props.fontWeight || 'bold'};
        background-color: ${props => props.backgroundColor || 'white'};
`

const Heading = props => {
    return (
        <HeadingStyle {...props}>
            <h1>{props.heading}</h1>
        </HeadingStyle>
    )
}
export default Heading
