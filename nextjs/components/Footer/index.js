import React from 'react'
import Navigation from '../Navigation'
import styled from 'styled-components'

const StyledFooter = styled.div`
	background-color: #3d73cf;
	height: 100vh;
	width: 100%;
	.footer {
		height: 50%;
	}
`
const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer" />
		</StyledFooter>
	)
}

export default Footer
