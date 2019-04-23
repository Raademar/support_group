import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNewsModal = styled.div`
  height: ${props => (props.isDesktop ? "50vh" : "100%")};
  width: 100%;
  background: #fff;
  color: #1b1b1b;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  h1 {
    font-family: "Paytone One", sans-serif;
    font-size: 24px;
    margin-left: 24px;
    margin-right: 24px;
  }
  p {
    margin-left: 24px;
    margin-right: 24px;
    letter-spacing: 0.04em;
    font-weight: normal;
  }
  img {
    width: 100%;
  }
  p {
    line-height: 28px;
    letter-spacing: 0.04em;
  }
  span {
    font-size: 42px;
    position: absolute;
    right: 24px;
    top: 8px;
    color: #fff;
  }
  input {
    height: 30px;
    padding: 10px 0 10px 10px;
  }
  textarea {
    padding: 18px 0 0 10px;
    padding-top: -10px;
  }
  input,
  textarea {
    width: 96%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    margin: 2px 0;
    /* font-size: 20px; */
    font-family: Lato;
    color: #1c1c1c;
  }
  button {
    background-color: #2f86ed;
    border-radius: 8px;
    left: 0%;
    right: 0%;
    top: 0.39%;
    bottom: 0%;
    height: 51px;
    width: 100%;
    margin-top: 1.2em;
    color: #1c1c1c;
    font-size: 18px;
    border: none;
    background-color: #ffd256;
  }
  form p {
    margin-bottom: 1px;
    font-weight: normal;
  }
  .time-and-date {
    width: 100%;
    color: #3d73cf;
    margin: 12px 0px;
    font-weight: 800;
    padding-left: 44px;
    margin-left: 30px;
    margin-right: 24px;
  }
  .time-and-date > * {
    margin: 8px 24px;
  }
`;

class NewsModal extends Component {
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
		console.log(this.props.newsInfo)
		return (
			<StyledNewsModal>
				<span onClick={this.props.toggleModal}>&times;</span>
				<img
					src={this.props.newsInfo.acf.image.sizes.large}
					alt={this.props.newsInfo.acf.image.filename}
				/>
				<h1>{this.props.newsInfo.title.rendered}</h1>
				<p>{this.props.newsInfo.acf.text}</p>
				<p className="time-and-date">
					{this.parseShitWPTimeToNormalTime(this.props.newsInfo.date)}{' '}
					{this.props.newsInfo.acf.specific_branch}
				</p>
			</StyledNewsModal>
		)
	}
}

export default NewsModal
