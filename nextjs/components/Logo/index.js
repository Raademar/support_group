import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios'

const Image = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  justify-content: center;
  padding-left: 24px;
  margin-top: 0px;
`;

export default props => {
	const thumb = '/static/images/logo_sgn.svg'

	return (
		<Image>
			<Link href="/">
				<a href="/">
					<img src={thumb} alt="" />
				</a>
			</Link>
		</Image>
	)
}
