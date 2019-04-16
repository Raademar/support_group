import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const HeadingStyle = styled.h1`
	font-size: ${props => (props.isDesktop ? '64px' : '24px')};
	font-size: ${props => props.fontSize};
	font-weight: ${props => props.fontWeight || 'bold'};
	color: ${props => props.color || '#558FF0'};
	background-color: ${props => props.backgroundColor};
	font-family: ${props => props.fontFamily || "'Paytone One', sans-serif"};
	position: ${props => props.position || 'absolute'};
	top: ${props => props.top};
	padding-top: ${props => props.paddingTop};
	text-align: ${props => props.textAlign || 'center'};
	letter-spacing: ${props => props.letterSpacing || 'initial'};
	line-height: ${props => props.lineHeigt || '140%'};
	width: ${props => props.width || '100%'};
	margin-top: ${props => props.marginTop || '0'};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginRight};
	margin-bottom: ${props => props.marginBottom};
	left: ${props => props.left || '0'};
	display: ${props => props.display};
`

const Heading = props => {
	console.log(props.heroText)

	return <HeadingStyle {...props}>{props.heroText}</HeadingStyle>
}
export default Heading
