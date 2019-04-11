import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'
import Layout from '../Layout'

const AboutStyle = styled.div`
	/* margin: 0 auto;
	background-color: ${props => props.backgroundColor || 'white'};
	margin-top: 3em; */
`

const AboutPage = props => {
	if ( props.whatWeDo ||  props.background ||  props.ourVision ) {
    // console.log(props.pageData)
    // console.log(props.whatWeDo);

    return (
      <AboutStyle>
        <Layout navigationMenu={props.navigationMenu}>
          <Section>
            <Heading
              heroText={props.whatWeDo[0].title.rendered}
              left="0"
              position="relative"
              marginTop="1em"
            />
            <BodyText
              bodyText={props.whatWeDo[0].content.rendered}
              lineHeight="180%"
              marginLeft="5%"
              textAlign="left"
              fontSize="18"
              width="90%"
              paddingBottom="2em"
            />
          </Section>
          <Section
            backgroundColor="#F2F2F2"
            width="100%"
            left="0"
            marginLeft="0"
            marginRight="0"
          >
            <img src={props.background[0].acf.image} />
            <Heading
              heroText={props.background[0].title.rendered}
              left="0"
              position="relative"
              textAlign="left"
              marginLeft="5%"
              color="#1c1c1c"
              fontSize="24px"
              width="90%"
            />
            <BodyText
              bodyText={props.background[0].content.rendered}
              lineHeight="180%"
              marginLeft="5%"
              textAlign="left"
              fontSize="18"
              width="80%"
              paddingBottom="5em"
            />
          </Section>
          <Section
            backgroundColor="#fff"
            width="100%"
            left="0"
            marginLeft="0"
            marginRight="0"
          >
            <img src={props.ourVision[0].acf.image} />
            <Heading
              heroText={props.ourVision[0].title.rendered}
              left="0"
              position="relative"
              textAlign="left"
              marginLeft="5%"
              color="#1c1c1c"
              fontSize="24px"
              width="90%"
              marginTop="0"
            />
            <BodyText
              bodyText={props.ourVision[0].content.rendered}
              lineHeight="180%"
              marginLeft="5%"
              textAlign="left"
              fontSize="18"
              width="90%"
              paddingBottom="5em"
            />
          </Section>
        </Layout>
      </AboutStyle>
    );
  } else {
    return null;
  }
}

export default AboutPage