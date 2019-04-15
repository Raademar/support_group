import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'
import ActivitiesPopup from '../ActivitiesPopup'
import React, { useEffect } from 'react'

const ActivitiesList = styled.section`
	padding: 0;
	margin: 0;
	height: auto;
	text-align: center;
	position: relative;
	height: 100vh;

	& ul {
		list-style-type: none;
		width: 100vw;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
		margin-top: 4em;
	}
	& div {
		position: relative;
		overflow: hidden;
	}
	& img {
		border-radius: 50%;
		margin-bottom: 12px;
		width: 80%
	}
	& div {
		grid-template-columns: 3fr 1fr;
		left: 0;
		margin-left: 0px;
		margin-right: 0px;
		margin-bottom: 5%;
	}
`

const makeThumb = () => {
	const portraitThumbnailImage = [
		...document.querySelectorAll('.activities-thumb')
	]
	portraitThumbnailImage.map(img => {
		img.clientHeight > img.clientWidth
			? img.classList.add('image-portrait')
			: img.classList.add('landscape')
	})
	console.log(portraitThumbnailImage)
}

const Activities = props => {
	useEffect(() => {
		// makeThumb()
	})

	if (props.activitiesData) {
		const { activitiesData } = props

		return (
			<ActivitiesList {...props}>
				<Heading heroText="ACTIVITIES" position="relative" />
				<ul>
					{activitiesData.map((item, index) => (
						<div key={index}>
							<ActivitiesPopup item={item} index={index} />
							{/* <img src={`${item.acf.image.sizes.thumbnail}`} />
            	<li key={index}>{`${item.title.rendered}`}</li> */}
						</div>
					))}
				</ul>
			</ActivitiesList>
		)
	} else {
		return null
	}
}

export default Activities
