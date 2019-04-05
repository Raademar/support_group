import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.h1`
	font-size: ${props => props.fontSize || '36px'};
	font-weight: ${props => props.fontWeight || 'bold'};
	font-family: 'Paytone One', sans-serif;
	margin: 0;
	padding: 0;
	position: absolute;
`

const Heading = props => {
	console.log(props.heroText)

	return <HeadingStyle {...props}>{props.heroText}</HeadingStyle>
}
export default Heading
