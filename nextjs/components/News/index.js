import React, { Component } from 'react'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Heading from '../Heading'
import Section from '../Section'
import Slider from 'react-slick'

const StyledNewsPosts = styled.div`
	background-color: #dfeafa;
	/* display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center; */
	.news-container {
		background-color: #fff;
		/* width: 100vw; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 42px;
		.news-image-container {
			padding: 24px 0;
			margin: 0 24px;
			img {
				width: 100%;
				height: auto;
			}
		}
		.news-content-container {
			width: 100%;
			font-size: 18px;
			line-height: 30px;
			letter-spacing: 0.04em;
			p {
				font-weight: 200;
			}
		}
		.news-content-container > * {
			margin: 8px 24px;
		}
		.news-date {
			width: 100%;
			color: #3d73cf;
			margin: 24px 0px;
			font-weight: 800;
		}
		.news-date > * {
			margin: 8px 24px;
		}
	}
`

const NewsButton = styled.a`
	width: 319px;
	height: 50px;
	border: 4px solid #3d73cf;
	background-color: #dfeafa;
	color: #3d73cf;
	font-weight: 900;
	font-size: 16px;
	font-family: Lato;
	border-radius: 8px;
	margin: 0 auto;
	margin-top: 24px;
	margin-bottom: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`

class SimpleSlider extends Component {
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

	parseShitWPTimeToNormalTime = badTime => {
		Date.parse(badTime)
		const goodTime = new Date(badTime)
		const date = goodTime.getDate()
		const month = goodTime.getMonth()
		const hours = goodTime.getHours()

		// Will display time in 10: format
		const formattedTime = `${date}/${month} ${hours}:00`
		return formattedTime
	}

	render() {
		const posts = this.props.posts
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
			// variableWidth: true
			// centerMode: true
		}
		return (
			<div
				style={{
					background: '#dfeafa',
					paddingBottom: '56px',
					paddingTop: '56px'
				}}
			>
				<Heading
					position="relative"
					heroText="NEWS"
					letterSpacing="4px"
					marginBottom="50px"
				/>
				<StyledNewsPosts {...this.props}>
					<Slider {...settings}>
						{posts.map((item, index) => (
							<div className="news-container" key={index}>
								<div className="news-image-container">
									<img src={item.acf.image.sizes.large} alt="" />
								</div>
								<div className="news-content-container">
									<h3 className="news-header">{item.title.rendered}</h3>
									<p className="news-content">
										{this.getExcerpted(item.acf.text, 40).shortText}
									</p>
								</div>
								<div className="news-date">
									<span>
										{this.parseShitWPTimeToNormalTime(item.date)}{' '}
										{item.acf.specific_branch}
									</span>
								</div>
							</div>
						))}
					</Slider>
				</StyledNewsPosts>
				<NewsButton href="/news">SEE ALL NEWS</NewsButton>
			</div>
		)
	}
}

export default SimpleSlider
