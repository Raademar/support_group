import Link from 'next/link'
import styled from 'styled-components'

const MenuItemsList = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: ${props => props.flexDir || 'column'};
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
	padding: 0 24px;
	grid-column: ${props => props.gridCol || ''};
	& li {
		color: #fff;
		& a {
			text-decoration: none;
			color: #fff;
		}
	}

`

const Navigation = props => {
	if (props.navigationMenu) {
		const menuItem = props.navigationMenu
		console.log(menuItem)

		return (
			<MenuItemsList {...props}>
					{menuItem.map((item, index) => (
						<li key={index}>
							<Link href={`${item.url.toLowerCase()}`}>
								<a href={`${item.url.toLowerCase()}`}>
									{`${item.title.toUpperCase()}`}
								</a>
							</Link>
						</li>
					))}
			</MenuItemsList>
		)
	} else {
		return null
	}
}
export default Navigation
