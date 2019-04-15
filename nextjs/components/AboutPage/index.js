import Link from 'next/link'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const AboutStyle = styled.div`
	/* margin: 0 auto;
	background-color: ${props => props.backgroundColor || "white"};
	margin-top: 3em; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .image{
            margin-top: 1.6em;
			width: ${props => (props.isDesktop ? "50vw" : "90vw")};
			/* background-color: ${props => (props.isDesktop ? "blue" : "green")}; */
            display: flex;
			margin-left: 20px;
            /* flex-direction: column;
            align-items: center;
            justify-content: center; */
      }

	  & .image img {
		  width: 90%;
		  
		  
	  }

      & .members{
        margin-top: 1em;
        grid-template-columns: ${props =>
          props.isDesktop ? "1fr 1fr 1fr" : "1fr 3fr"};
        grid-template-rows: ${props => (props.isDesktop ? "1fr 1fr 1fr" : "")};
        display: grid;
        align-items: center;
        margin-left: 24px;
        margin-right: 24px;
        width: 90%;

        & img{
          /* grid-column: 1; */
        }

        p{
          margin-right: 24px;
          line-height: 28px;
          color: #1c1c1c;
        }
      }
	  & .divBox {
			width: ${props => (props.isDesktop ? "50%" : "90%")};
			display: ${props => (props.isDesktop ? "relativ" : "flex")};
			margin-top: 5%;
			flex-direction: column;
            align-content: center;
            justify-items: center;
		}
`;

const AboutPage = props => {
	if (props.whatWeDo || props.background || props.ourVision || props.isDesktop) {
		// console.log(props.pageData)
		// console.log(props.navigationMenu)
		console.log(props.isDesktop);
		
		return (
			
      <AboutStyle {...props}>
          <Section>
            <Heading
              heroText={props.whatWeDo[0].title.rendered}
			  marginTop={props.isDesktop ? "120px" : "1em"}
			  marginBottom={props.isDesktop ? "40px" : "1em"}
              left="0"
              position="relative"
            />
            <BodyText
              bodyText={props.whatWeDo[0].content.rendered}
			  lineHeight={props.isDesktop ? "220%" : "180%"}
			  textAlign={props.isDesktop ? "center" : "left"}
              fontSize="18"
              width={props.isDesktop ? "auto" : "100%"}
              paddingBottom="2em"
			  marginRight={props.isDesktop ? "12em" : ""}
			  marginLeft={props.isDesktop ? "12em" : ""}
			  marginBottom={props.isDesktop ? "80px" : ""}

            />
          </Section>
          <Section
		  	display={props.isDesktop ? 'flex' : 'block'}
			justifyContent={props.isDesktop ? 'center' : ''}
            backgroundColor="#F2F2F2"
            width="100%"
            left="0"
            marginLeft="0"
            marginRight="0"
          >
			<div className="image">
              <img src={props.background[0].acf.image} alt="bild" />
            </div>
			<div className="divBox">
              <Heading
				heroText={props.background[0].title.rendered}
				width={props.isDesktop ? '50%' : '90%'}
                left="0"
                position="relative"
                textAlign="left"
                marginLeft="24px"
                color="#1c1c1c"
                fontSize="24px"
              />
              <BodyText
				bodyText={props.background[0].content.rendered}
				// width={props.isDesktop ? '50%' : '90%'}
                lineHeight="180%"
                marginLeft="24px"
                textAlign="left"
                fontSize="18"
				paddingBottom={props.isDesktop ? "0em" : "4em"}
              />
            </div>
          </Section>
		  <Section 
				backgroundColor="#fff"
				display={props.isDesktop ? 'flex' : 'block'}
				justifyContent={props.isDesktop ? 'center' : ''}
			>
            <div className="image">
			  <img src={props.ourVision[0].acf.image} alt="alt"/>
            </div>
			<div className="divBox">
            <Heading
              heroText={props.ourVision[0].title.rendered}
              left="0"
              position="relative"
              textAlign="left"
              color="#1c1c1c"
              fontSize="24px"
              marginTop="0"
              marginTop="1em"
            />
            <BodyText	
              bodyText={props.ourVision[0].content.rendered}
              lineHeight="180%"
              textAlign="left"
              fontSize="18"
              paddingBottom={props.isDesktop ? "5%" : "4em"}
            />
			</div>
          </Section>
          <Section
            backgroundColor="#DFEAFA"
            width="100%"
            left="0"
            marginLeft="0"
            marginRight="0"
            paddingBottom="4em"
          >
            <Heading
              paddingTop="2em"
              paddingBottom="3em"
              heroText="MISSION"
              left="0"
              position="relative"
              textAlign="left"
              color="#1c1c1c"
              fontSize="24px"
              marginLeft="24px"
              width="90%"
            />
            {props.missionData.map((item, index) => (
              <div className="members">
                <img src={`${item.acf.image}`} />
                <p key={index}>{`${item.content.rendered}`}</p>
              </div>
            ))}
          </Section>
      </AboutStyle>
    );
	} else {
		return null
	}
}

export default AboutPage
