import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import styled from 'styled-components'
import NewsModal from '../components/NewsModal'

const StyledNewsPosts = styled.div`
	background-color: #dfeafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.news-container {
		background-color: #fff;
		width: 100vw;
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

export default class extends Component {
	state = {
		newsModalOpen: false,
		newsInfo: {}
	}
	// Resolve promise and get initial props
	static async getInitialProps({ req }) {
		// Make request for props

		const posts = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/wp/v2/posts`
		)
		const pages = await axios.get(
			`http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
		)

		// Return the data

		return {
			posts: posts.data,
			pages: pages.data
		}
	}

	getClickedNewsItem(item) {
		this.setState({
			newsInfo: item
		})
	}
	toggleNewsModal = () => {
		this.setState({
			newsModalOpen: !this.state.newsModalOpen
		})
	}

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
		// console.log(posts)

		return (
			<Layout navigationMenu={this.props.pages}>
				<Heading
					heroText="NEWS"
					position="initial"
					paddingTop="120px"
					paddingBottom="42px"
					backgroundColor="#DFEAFA"
				/>
				<StyledNewsPosts>
					{posts.map((item, index) => (
						<div className="news-container" key={index}>
							<div className="news-image-container">
								<img
									src={item.acf.image.sizes.large}
									alt=""
									onClick={event => {
										this.getClickedNewsItem(item)
										this.toggleNewsModal()
									}}
								/>
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
				</StyledNewsPosts>
				{this.state.newsModalOpen && (
					<NewsModal
						newsInfo={this.state.newsInfo}
						toggleModal={this.toggleNewsModal}
					/>
				)}
			</Layout>
		)
	}
}
