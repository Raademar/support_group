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
    flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
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
      /* height: 286px; */
    }
  }
  & object {
    margin: 2rem 0;
  }
  `

class News extends Component {
  render() {

    const arrowInCircle = '/static/images/arrow_in_circle.svg'
    
    if (this.props.posts) { 
      return (
        <NewsStyled {...this.props}>
          <Section>
          <Heading
						position="relative"
						heroText="NEWS"
						letterSpacing='4px'
					/>
          <div className="news-item-container">
            {this.props.posts.map((item, index) => (
              <div key={index}>
                <img src={item._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url || ''} alt=""/>
                <h3>{item.title.rendered}</h3>
                {/* <Image position="relative" image={props.aboutImage} /> */}
                <BodyText
                  position="relative"
                  bodyText={item.excerpt.rendered}
                  textAlign={"left"}
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

