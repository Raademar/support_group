import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const AboutStyle = styled.div`
  margin: 0 auto;
  background-color: ${props => props.backgroundColor || "white"};
  margin-top: 3em;
  /* width: ${props => props.isDesktop ? "80%" : ""}; */
`;

const StyledButton = styled.a`
	width: 319px;
	height: 50px;
	border: 4px solid #3d73cf;
	background-color: #fff;
	color: #3d73cf;
	font-weight: 900;
	font-size: 16px;
	font-family: Lato;
	border-radius: 8px;
	margin: 0 auto;
	margin-top: 44px;
	margin-bottom: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	a {
		text-decoration: none;
		color: #3d73cf;
	}
`

const About = props => {
	if (props.pageData) {
		// console.log(props.pageData)

		return (
      <AboutStyle>
        <Section paddingTop="24px">
          <Heading
            position="relative"
            heroText={props.pageData.title.rendered.toUpperCase()}
            letterSpacing="4px"
            marginTop="2%"
            letterSpacing="0.04em"
          />
          {/* <Image position="relative" image={props.aboutImage} /> */}
          <BodyText
            bodyText={props.pageData.content.rendered}
            // width={props.isDesktop ? "90%" : ""}
            marginLeft={props.isDesktop ? "15%" : ""}
			marginRight={props.isDesktop ? "15%" : ""}
			fontSize={props.isDesktop ? "24px" : "16px" }
			letterSpacing="0.04em"
			lineHeight={props.isDesktop ? "44px" : "27px"}
				  />
          <Link href="/about">
            <StyledButton>READ MORE ABOUT OUR WORK</StyledButton>
          </Link>
        </Section>
      </AboutStyle>
    );
	} else {
		return null
	}
}

export default About
