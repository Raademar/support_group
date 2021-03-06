import Link from 'next/link'
import styled from 'styled-components'

const MenuItemsList = styled.ul`
	padding: 0;
	margin: 0;
	margin-top: ${props => (props.marginTop ? '10%' : '')};
	flex-direction: ${props => props.flexDir || 'column'};
	display: ${props => (props.isDesktop ? 'grid' : 'flex')};
	list-style: none;
	grid-column: ${props => props.gridCol || ''};
	grid-template-rows: 1fr;
	grid-template-columns: repeat(10, 10%);
	/* grid-column: 2/6; */
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
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		grid-column: 5/11;
		margin-left: ${props => props.isDesktop && '4%'};
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
