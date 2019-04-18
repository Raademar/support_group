import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'
import ActivitiesPopup from '../ActivitiesPopup'
import React, { useEffect } from 'react'

const ActivitiesList = styled.section`
  padding: 0;
	padding-left:${props => props.isDesktop ? '5%' : ''};
  margin: 0;
  height: auto;
  text-align: center;
  position: relative;
  background-color: #fff;

  & ul {
    list-style-type: none;
    width: ${props => (props.isDesktop ? "90vw" : "100vw")};
    margin: 0;
    padding: 0;
		padding-bottom:  ${props => props.isDesktop ? "5%" : "0"};
    display: grid;
    grid-template-columns: ${props =>
    props.isDesktop ? "1fr 1fr 1fr" : "1fr 1fr"};
    grid-gap: ${props => props.isDesktop ? "40px" : "0"};
    margin-top: 4em;
    margin-left: ${props => (props.isDesktop ? "" : "0")};
    margin-right: ${props => (props.isDesktop ? "" : "0")};
  }
  & img {
    border-radius: 50%;
    margin-bottom: 16px;
    width: ${props => (props.isDesktop ? "30%" : "45%")};
  }
  & div {
    position: relative;
    overflow: hidden;
    grid-template-columns: 3fr 1fr;
    left: 0;
    /* margin-left: ${props => (props.isDesktop ? "10%" : "0")}; */
    margin-right: 0px;
    margin-bottom: ${props => props.isDektop ? "5%" : "0"};
  }
`;

const makeThumb = () => {
	const portraitThumbnailImage = [
		...document.querySelectorAll('.activities-thumb')
	]
	portraitThumbnailImage.map(img => {
		img.clientHeight > img.clientWidth
			? img.classList.add('image-portrait')
			: img.classList.add('landscape')
	})
	// console.log(portraitThumbnailImage)
}

const Activities = props => {
	useEffect(() => {
		// makeThumb()
	})

	if (props.activitiesData) {
		const { activitiesData, isDesktop } = props

		return (
      <ActivitiesList {...props}>
        <Heading
          heroText="CLUBS AND ACTIVITIES"
          position="relative"
          fontSize={props.isDesktop ? "36px" : "24px"}
          paddingTop={props.isDesktop ? "6%" : "14%"}
          marginLeft={props.isDesktop ? "-2.5%" : ""}
          marginBottom={props.isDesktop ? "10%" : ""}
        />
        <ul>
          {activitiesData.map((item, index) => (
            <div key={index}>
              <ActivitiesPopup
                item={item}
                index={index}
                isDesktop={props.isDesktop}
              />
              {/* <img src={`${item.acf.image.sizes.thumbnail}`} />
            	<li key={index}>{`${item.title.rendered}`}</li> */}
            </div>
          ))}
        </ul>
      </ActivitiesList>
    );
	} else {
		return null
	}
}

export default Activities
