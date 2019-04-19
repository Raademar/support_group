import Link from 'next/link'
import styled from 'styled-components'

const MenuItemsList = styled.ul`
	padding: 0;
	margin: 0;
	margin-top: 10%;
	display: flex;
	flex-direction: ${props => props.flexDir || 'column'};
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
	/* padding: 0 24px; */
	grid-column: ${props => props.gridCol || ''};
	& li {
		color: #fff;
		margin-top: ${props => (props.isDesktop ? '' : '18%')};
		& a {
			text-decoration: none;
			color: #fff;
			font-weight: 900;
			font-size: ${props => (props.isDesktop ? '' : '18px')};
		}
	}
	ul {
		padding-inline-start: ${props => (props.isDesktop ? '' : '24px')};

		& li {
			text-decoration: none;
			color: #fff;
			font-weight: 900;
			font-size: 18px;
			list-style: none;
			margin-top: 18%;
		}
	}
	.topMenu {
		margin-top: ${props => (props.isDesktop ? '10px' : '50%')};
	}
	.bottomMenu {
		display: ${props => (props.isDesktop ? 'none' : 'block')};
	}
`

const Navigation = props => {
	if (props.navigationMenu) {
		const menuItem = props.navigationMenu
		// console.log(menuItem)
		return (
			<MenuItemsList {...props}>
				<div className="topMenu">
					{menuItem.map((item, index) => (
						<li key={index}>
							<Link href={`${item.url.toLowerCase()}`}>
								<a href={`${item.url.toLowerCase()}`}>
									{`${item.title.toUpperCase()}`}
								</a>
							</Link>
						</li>
					))}
				</div>
				<ul className="bottomMenu">
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
			</MenuItemsList>
		)
	} else {
		return null
	}
}
export default Navigation
