import React, { Component } from 'react'
import Navigation from '../Navigation'
import HamburgerBar from '../HamburgerBar'
import Logo from '../Logo'
import styled from 'styled-components'
import Head from 'next/head'
import DesktopMenuDropdown from './DesktopMenuDropdown'
import Link from 'next/link'

const StyledHeader = styled.div`
	background-color: #3d73cf;
	display: grid;
	grid-template-columns: ${props =>
		props.isDesktop ? 'repeat(10, 10%)' : 'repeat(5, 20%)'};
	grid-template-rows: 1fr 1fr;
	grid-row-gap: 5px;
	height: 80px;
	transition: top 0.3s;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
	.desktop-menu-container {
		grid-column: 5 / 10;
		color: #fff;
		div {
			height: 100%;
		}
		.desktop-menu {
			height: 100%;
			list-style: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
			margin: 0;
			padding: 0;
			.desktop-menu-dropdown-trigger {
				color: #f9c943;
				border-bottom: 3px solid #f9c943;
				position: relative;
				cursor: pointer;
			}
			.desktop-menu-dropdown-trigger::after {
				content: '';
				background-image: url('/static/images/arrow_down.svg');
				display: block;
				background-size: 10px 10px;
				height: 10px;
				width: 10px;
				position: absolute;
				top: 7px;
				right: -1em;
			}
			li {
				color: #fff;
				a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
	/* .desktop-menu-dropdown {

	} */
`

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuDropdownOpen: false
		}
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

	handleClick = () => {
		this.setState({
			menuDropdownOpen: !this.state.menuDropdownOpen
		})
	}

	render() {
		return (
			<StyledHeader id="navbar" {...this.props}>
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
					<div className="desktop-menu-container">
						<ul className="desktop-menu">
							<li
								onClick={this.handleClick}
								className="desktop-menu-dropdown-trigger"
							>
								MENU
							</li>
							<li>
								<Link href="/member">
									<a href="/member">BECOME A MEMBER</a>
								</Link>
							</li>
							<li>
								<Link href="/volunteer">
									<a href="/volunteer">BECOME A VOLUNTEER</a>
								</Link>
							</li>
							<li>
								<Link href="/donate">
									<a href="/donate" style={{ color: '#12E7B4' }}>
										DONATE TO US
									</a>
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<HamburgerBar onClick={this.props.toggleMenu} />
				)}
				{this.state.menuDropdownOpen && this.props.isDesktop && (
					<DesktopMenuDropdown
						navigationMenu={this.props.navigationMenu}
						isDesktop={this.props.isDesktop}
					/>
				)}
			</StyledHeader>
		)
	}
}

export default Header
