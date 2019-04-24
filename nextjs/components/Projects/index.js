import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'
import ActivitiesPopup from '../ActivitiesPopup'
import React, { useEffect } from 'react'

const ProjectStyle = styled.div`
	height: 100wh;

	.projectsBox {
		display: grid;
		grid-template-columns: ${props =>
			props.isDesktop ? '1fr 1fr 1fr' : '1fr'};
		grid-column-gap: 10%;
		margin-left: 5%;
		margin-right: 5%;
		padding-top: 5%;
		padding-bottom: 5%;
	}
	img {
		display: flex;
		justify-content: center;
		justify-items: center;
		margin: auto;
		margin-top: 10%;
	}
	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 24px;
	}
	p {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 18px;
		font-weight: lighter;
		margin-top: 8%;
		line-height: 30px;
		letter-spacing: 0.04em;
	}
`

const Projects = props => {
	return (
    <ProjectStyle {...props}>
      <Heading
        heroText="OUR PROJECTS"
        position={props.isDesktop ? "relative" : "relative"}
        fontSize={props.isDesktop ? "36px" : "24px"}
        marginTop={props.isDesktop ? "4vh" : "2vh"}
        paddingTop="8vh"
        marginBottom={props.isDesktop ? "2vh" : "2vh"}
        fontWeight="normal"
      />
      <div className="projectsBox">
			{props.projectsData.reverse().map((item, index) => (
          	<div key={index}>
            <img src={item.acf.logo.sizes.large} />
            <h1>{item.title.rendered}</h1>
            <p>{item.acf.text}</p>
          </div>
        ))}
      </div>
      .
    </ProjectStyle>
  );
}

export default Projects
