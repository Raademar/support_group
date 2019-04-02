import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios';

const Image = styled.div`
		display: flex;
		flex-direction: column;
		grid-column: 3;
		justify-content: center;

`

export default (props) => {
	console.log(props.images)
	const thumb = props.images[0].media_details.sizes.thumbnail.source_url
	const medium = props.images[0].media_details.sizes.medium.source_url
	const full = props.images[0].media_details.sizes.full.source_url

	return (
	<Image>
			<img src={thumb} srcSet={`${thumb} 300w, ${medium} 600w, ${full} 800w`} />
	</Image>
	)}	

