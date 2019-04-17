import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import ActivitiesPopupBox from '../ActivitiesPopupBox'
import React, { Component } from 'react'
import Heading from '../Heading'

class ActivitiesPopup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showPopup: false
		}
	}
	togglePopup = () => {
		this.setState({
			showPopup: !this.state.showPopup
		})
	}

	render() {
		return (
			<div {...this.props} isDesktop={this.props.isDesktop}>
				<div onClick={this.togglePopup}>
					<img
						onClick={this.togglePopup}
						src={`${this.props.item.acf.symbol.sizes.thumbnail}`}
					/>
					<Heading
						heroText={this.props.item.title.rendered}
						fontSize={this.props.isDesktop ? '24px' : '18px'}
						fontWeight={this.props.isDesktop ? 'bold' : 'bold'}
						position={this.props.isDesktop ? 'relative' : 'relative'}
						marginBottom={this.props.isDesktop ? '0.5vh' : '40px'}
						width={this.props.isDesktop ? '' : '80%'}
						marginLeft={this.props.isDesktop ? '' : '10%'}
						color="#393939"
					/>
					<BodyText
						bodyText={this.props.item.content.rendered}
						fontSize={this.props.isDesktop ? '24px' : '20px'}
						fontWeight={this.props.isDesktop ? 'lighter' : 'lighter'}
						width={this.props.isDesktop ? '90%' : ''}
						paddingLeft={this.props.isDesktop ? '10%' : ''}
						display={this.props.isDesktop ? 'flex' : 'none'}
					/>
				</div>

				{this.state.showPopup ? (
					<ActivitiesPopupBox
						item={this.props.item}
						width={this.props.isDesktop ? '66vw' : '95vw'}
						height={this.props.isDesktop ? '60vh' : '80vh'}
						top={this.props.isDesktop ? '12.5vh' : '12.5vh'}
						left={this.props.isDesktop ? '17vw' : '2vw'}
						zIndex="4"
						backgroundColor="white"
						position="fixed"
						closePopup={this.togglePopup.bind(this)}
						isDesktop={this.props.isDesktop}
					/>
				) : null}
			</div>
		)
	}
}

export default ActivitiesPopup
