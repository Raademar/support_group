import React from 'react'
import Navigation from '../../Navigation'

const DesktopMenuDropdown = props => {
	return (
		<div>
			<Navigation
				navigationMenu={props.navigationMenu}
				gridCol="2/6"
				flexDir="row"
				isDesktop={props.isDesktop}
			/>
		</div>
	)
}

export default DesktopMenuDropdown
