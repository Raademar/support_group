import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.h1`
	font-size: ${props => props.fontSize || '24px'};
	font-weight: ${props => props.fontWeight || 'bold'};
	color: ${props => props.color || '#558FF0'};
	font-family: ${props => props.fontFamily || "'Paytone One', sans-serif"};
	position: ${props => props.position || 'absolute'};
	top: ${props => props.top};
	text-align: ${props => props.textAlign || 'center'};
`

const Heading = props => {
	console.log(props.heroText)

	return <HeadingStyle {...props}>{props.heroText}</HeadingStyle>
}
export default Heading
