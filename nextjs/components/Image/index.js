import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const ImageStyle = styled.div`
	display: flex;
	height: 100%;
	align-content: center;
	justify-content: center;
	img {
		width: ${props => props.width || '80%'};
		font-weight: ${props => props.fontWeight || 'bold'};
		position: ${props => props.position || 'absolute'};
		display: flex;
		margin-left: auto;
		margin-right: auto;
	}
`

const Image = props => {
	return (
		<ImageStyle {...props}>
			<img src={props.image} />
		</ImageStyle>
	)
}
export default Image
