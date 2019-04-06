import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios'

const Image = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 1;
	justify-content: center;
	margin-left: 14px;
`

export default props => {
	const thumb = '/static/images/logo_sgn.svg'

	return (
		<Image>
			<img src={thumb} alt="" />
		</Image>
	)
}
