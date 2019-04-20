import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigation'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const StyledDropdownMenu = styled.div`
	grid-row: 2;
	grid-column: 1 / 11;
	width: 100%;
	background: #3d73cf;
`

const DesktopMenuDropdown = props => {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		console.log(loaded, '------')
		setLoaded(true)
	})

	return (
		<TransitionGroup component={null}>
			<CSSTransition
				in={loaded}
				appear={false}
				classNames="menu-desktop"
				timeout={600}
				unmountOnExit
				key={1}
			>
				<StyledDropdownMenu>
					<CSSTransition
						in={loaded}
						appear={false}
						classNames="menu-desktop"
						timeout={600}
						unmountOnExit
						key={2}
					>
						<Navigation
							navigationMenu={props.navigationMenu}
							gridCol="2/6"
							flexDir="row"
							isDesktop={props.isDesktop}
						/>
					</CSSTransition>
				</StyledDropdownMenu>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default DesktopMenuDropdown
