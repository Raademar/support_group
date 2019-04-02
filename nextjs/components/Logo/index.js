import Link from 'next/link'
import styled from 'styled-components'

const Image = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 3;
	justify-content: center;
`

export default () => {
	return (
		<Image>
			<img src="" alt="LOGO" />
		</Image>
	)
}
