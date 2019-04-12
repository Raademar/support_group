import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.h1`
	font-size: ${props => (props.isDesktop ? '64px' : '24px')};
	font-weight: ${props => props.fontWeight || 'bold'};
	color: ${props => props.color || '#558FF0'};
	background-color: ${props => props.backgroundColor};
	font-family: ${props => props.fontFamily || "'Paytone One', sans-serif"};
	position: ${props => props.position || 'absolute'};
	top: ${props => props.top};
	padding-top: ${props => props.paddingTop};
	text-align: ${props => props.textAlign || 'center'};
	letter-spacing: ${props => props.letterSpacing || 'initial'};
	width: ${props => props.width || '100%'};
	margin-top: ${props => props.marginTop || '0'};
<<<<<<< HEAD
	margin-left: ${props => props.marginLeft };
	margin-bottom: ${props => props.marginBottom };
=======
	margin-left: ${props => props.marginLeft};
	margin-bottom: ${props => props.marginBottom};
>>>>>>> 441a1c18d825a164295babcbae81821774be4caf
	left: ${props => props.left || '0'};
`

const Heading = props => {
	console.log(props.heroText)

	return <HeadingStyle {...props}>{props.heroText}</HeadingStyle>
}
export default Heading
