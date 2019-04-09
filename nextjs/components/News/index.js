import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const NewsStyled = styled.div`
	margin: 0 auto;
	height: 100vh;
  background-color: ${props => props.backgroundColor || 'white'};
  & img {
    width: 100%;
    height: auto;
  }
  `

class News extends Component {
  render() {
    // console.log(this.props.posts)
    
    if (this.props.posts) { 
      return (
        <NewsStyled>
          <Section>
            {this.props.posts.map((item, index) => (
              <div key={index}>
                <img src={item._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url || ''} alt=""/>
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
          </Section>
        </NewsStyled>
      )
    } else {
      return null
    }
  }
}

export default News

