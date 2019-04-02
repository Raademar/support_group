import Navigation from '../Navigation'
import HamburgerBar from '../HamburgerBar'
import Logo from '../Logo'
import styled from 'styled-components'
import React from 'react'
import Head from 'next/head'

const StyledHeader = styled.div`
	background-color: tomato;
	width: 100vw;
	height: 76px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Header = props => {
	return (
		<StyledHeader>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
			</Head>
			<style jsx global>{`
				body {
					padding: 0;
					margin: 0;
				}
			`}</style>
			<Logo />
			{props.isDesktop ? (
				<Navigation menuItems={this.props.navigationMenu} />
			) : (
				<HamburgerBar />
			)}
		</StyledHeader>
	)
}

export default Header
