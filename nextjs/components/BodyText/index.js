import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const BodyTextStyle = styled.div`
	width: ${props => props.width || '100%'};
	& p {
		font-size: ${props => props.fontSize || '18px'};
		font-weight: ${props => props.fontWeight || 400};
		margin-top: ${props => props.marginTop || '22px;'};
		margin-left: ${props => props.marginLeft};
		margin-right: ${props => props.marginRight};
		margin-bottom: ${props => props.marginBottom};
		padding-bottom: ${props => props.paddingBottom};
		padding-left: ${props => props.paddingLeft};
		background-color: ${props => props.backgroundColor};
		position: ${props => props.position || 'relative'};
		color: ${props => props.color || '#393939'};
		text-align: ${props => props.textAlign || 'center'};
		z-index: ${props => props.zIndex || ''};
		width: ${props => props.width};
		left: ${props => props.left};
		bottom: ${props => props.bottom};
		width: ${props => props.width};
		display: ${props => props.display};
		letter-spacing: ${props => props.letterSpacing};
		line-height: ${props => props.lineHeight};
	}
`

const BodyText = props => {
	return (
		<BodyTextStyle {...props}>
			<p>{props.bodyText}</p>
		</BodyTextStyle>
	)
}
export default BodyText
