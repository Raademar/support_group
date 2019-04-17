import React, { Component } from 'react'
import Navigation from '../Navigation'
import HamburgerBar from '../HamburgerBar'
import Logo from '../Logo'
import styled from 'styled-components'
import Head from 'next/head'

const StyledHeader = styled.div`
	background-color: #3d73cf;
	display: grid;
	grid-template-columns: repeat(5, 20%);
	/* position: absolute;
	top: 0; */
	transition: top 0.2s ease-in-out;
	width: 100%;
`
class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<StyledHeader>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<link
						href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Paytone+One"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						charset="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
				</Head>
				<style jsx global>{`
					body {
						padding: 0;
						margin: 0;
						font-family: 'Lato', sans-serif;
						overflow-x: hidden;
					}
					.slide-container {
						background: #fff;
					}
					.slick-slide h3,
					.slick-slide p,
					.slick-slide span {
						padding: 0 24px;
					}
					.slick-slide img {
						width: 100%;
					}
				`}</style>
				<Logo images={this.props.images} />
				{this.props.isDesktop ? (
					<Navigation
						navigationMenu={this.props.navigationMenu}
						gridCol="2/6"
						flexDir="row"
					/>
				) : (
					<HamburgerBar onClick={this.props.toggleMenu} />
				)}
			</StyledHeader>
		)
	}
}

export default Header
