import React, { Component } from 'react'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Heading from '../Heading'
import Section from '../Section'

const NewsStyled = styled.div`
	margin: 0 auto;
	background-color: ${props => props.backgroundColor || '#fff'};
	& section {
		display: flex;
		flex-direction: column;
	}
	& .news-item-container {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 100%;
		overflow-x: auto;
		/* height: 460px; */
		& div {
			/* width: 100%; */
			background-color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 24px;
			margin: 8px;
		}
		& img {
			height: 225px;
			width: auto;
		}
	}
	& object {
		margin: 2rem 0;
	}
	.news-item-container::-webkit-scrollbar {
		display: none;
	}
`

class News extends Component {
	getExcerpted = (str, limit) => {
		let fullText = str
		let shortText = str
		shortText = shortText.substr(0, shortText.lastIndexOf(' ', limit)) + '...'
		let returnString = {
			fullText: fullText,
			shortText: shortText
		}
		return returnString
	}

	render() {
		const arrowInCircle = '/static/images/arrow_in_circle.svg'

		if (this.props.posts) {
			return (
				<NewsStyled {...this.props}>
					<Section>
						<Heading position="relative" heroText="NEWS" letterSpacing="4px" />
						<div className="news-item-container">
							{this.props.posts.map((item, index) => (
								<div key={index}>
									<img src={item.acf.image.sizes.large || ''} alt="" />
									<h3>{item.title.rendered}</h3>
									{/* <Image position="relative" image={props.aboutImage} /> */}
									<BodyText
										position="relative"
										bodyText={this.getExcerpted(item.acf.text, 40).shortText}
										textAlign={'left'}
									/>
									<span>{item.date}</span>
								</div>
							))}
						</div>
						<object data={arrowInCircle} type="image/svg+xml" />
					</Section>
				</NewsStyled>
			)
		} else {
			return null
		}
	}
}

export default News
