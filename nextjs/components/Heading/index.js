import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.h1`
	font-size: ${props => props.fontSize || '24px'};
	font-weight: ${props => props.fontWeight || 'bold'};
    margin-top: ${props => props.marginTop || '144px;'};
	color: ${props => props.color || '#558FF0'};
	font-family: 'Paytone One', sans-serif;
	position: ${props => props.position || 'absolute'};
    text-align: ${props => props.textAlign || 'center'};
`

const Heading = props => {
	console.log(props.heroText)

	return <HeadingStyle {...props}>{props.heroText}</HeadingStyle>
}
export default Heading
