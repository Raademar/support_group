import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 4 /5;
	color: white;
`
class HamburgerBar extends React.Component {
	render() {
		return (
			<Wrapper>
				<span>-</span>
				<span>-</span>
				<span>-</span>
			</Wrapper>
		)
	}
}
export default HamburgerBar
