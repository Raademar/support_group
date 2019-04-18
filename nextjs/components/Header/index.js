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
	height: 80px;
	transition: top 0.3s;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
`
class Header extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		var prevScrollpos = window.pageYOffset
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset
			if (prevScrollpos > currentScrollPos) {
				document.getElementById('navbar').style.top = '0'
			} else {
				document.getElementById('navbar').style.top = '-80px'
			}
			prevScrollpos = currentScrollPos
		}
	}

	render() {
		return (
			<StyledHeader id="navbar">
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
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/styles/styles.css"
					/>
				</Head>
				<style jsx global>{`
					body {
						padding: 0;
						margin: 0;
						font-family: 'Lato', sans-serif;
						overflow-x: hidden;
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
