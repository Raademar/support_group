import Link from 'next/link'
import styled from 'styled-components'

const MenuItemsList = styled.ul`
	padding: 0;
	margin: 0;
`

const Navigation = props => {
	if (props.navigationMenu) {
		const menuItem = props.navigationMenu
		console.log(menuItem)

		return (
			<MenuItemsList>
				{menuItem.map((item, index) => (
					<li>
						<Link key={index} href={`/${item.title.toLowerCase()}`}>
							<a href={`/${item.title.toLowerCase()}`}>
								{`${item.title.toLowerCase()}`}
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
