import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 4px;
	grid-column: 5;
	& div {
		height: 5px;
		width: 27px;
		background: #fff;
		transition: all 0.2s ease;
		margin-bottom: 5px;
	}
`
class HamburgerBar extends React.Component {
	render() {
		return (
			<Wrapper onClick={this.props.onClick}>
				<div />
				<div />
				<div />
			</Wrapper>
		)
	}
}
export default HamburgerBar
