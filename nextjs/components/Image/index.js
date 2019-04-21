import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const ImageStyle = styled.div`
	height: 100%;
	/* position: relative; */

	img {
		width: ${props => props.width || '80%'};
		position: ${props => props.position || 'absolute'};
		bottom: ${props => props.bottom};
		right: ${props => props.right};
		z-index: 999;
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
