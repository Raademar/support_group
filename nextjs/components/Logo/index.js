import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios'

const Image = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 3;
	justify-content: center;
`

export default props => {
	const thumb = props.images.current_site_logo

	return (
		<Image>
			<img src={thumb} />
		</Image>
	)
}
