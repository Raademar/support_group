import Link from 'next/link'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const AboutStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& .image {
		margin-top: 1.6em;
		width: ${props => (props.isDesktop ? '50vw' : '90vw')};
		display: flex;
		margin-left: 20px;
	}

	& .image img {
		width: ${props => (props.isDesktop ? '50%' : '90%')};
		object-fit: contain;
		margin-top: 4%;
		width: 90%;
		height: 90%;
	}

	& .membersBox {
		grid-template-columns: ${props => (props.isDesktop ? '1fr 1fr' : '')};
		display: grid;
		margin-left: 36px;
		margin-right: 36px;
	}
	& .members {
		margin-top: 1em;
		grid-template-columns: ${props =>
			props.isDesktop ? '1fr 3fr' : '1fr 3fr'};
		display: grid;
		align-items: center;
		margin-left: ${props => (props.isDesktop ? '24px' : '')};
		margin-right: ${props => (props.isDesktop ? '24px' : '')};

		p {
			margin-right: 24px;
			line-height: 28px;
			color: #1c1c1c;
		}
	}
	& .divBox {
		width: ${props => (props.isDesktop ? '50%' : '90%')};
		display: ${props => (props.isDesktop ? 'relativ' : 'flex')};
		margin-top: ${props => (props.isDesktop ? '16vh' : '1.6em')};
		flex-direction: column;
		align-content: center;
		justify-items: center;
	}
`

const AboutPage = props => {
	if (
		props.whatWeDo ||
		props.background ||
		props.ourVision ||
		props.isDesktop
	) {
		// console.log(props.isDesktop)

		return (
      <AboutStyle {...props}>
        <Section>
          <Heading
            heroText={props.whatWeDo[0].title.rendered}
            marginTop={props.isDesktop ? "9em" : "1em"}
            marginBottom={props.isDesktop ? "40px" : "1em"}
            left="0"
            position="relative"
            fontSize="36px"
          />
          <BodyText
            bodyText={props.whatWeDo[0].content.rendered}
            lineHeight={props.isDesktop ? "220%" : "180%"}
            textAlign={props.isDesktop ? "center" : "left"}
            fontSize="24px"
            width={props.isDesktop ? "auto" : "100%"}
            paddingBottom={props.isDesktop ? "7em" : "1em"}
            marginRight={props.isDesktop ? "12em" : ""}
            marginLeft={props.isDesktop ? "12em" : ""}
            marginBottom={props.isDesktop ? "80px" : ""}
          />
        </Section>
        <Section
          display={props.isDesktop ? "flex" : "block"}
          justifyContent={props.isDesktop ? "center" : ""}
          backgroundColor="#F2F2F2"
          height={props.isDesktop ? "50vh" : ""}
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
              width={props.isDesktop ? "50%" : "90%"}
              left="0"
              position="relative"
              textAlign="left"
              marginLeft="24px"
              color="#1c1c1c"
              fontSize="24px"
            />
            <BodyText
              bodyText={props.background[0].content.rendered}
              width={props.isDesktop ? "90%" : ""}
              lineHeight="180%"
              marginLeft="24px"
              textAlign="left"
              fontSize="20px"
              paddingBottom={props.isDesktop ? "0em" : "4em"}
            />
          </div>
        </Section>
        <Section
          backgroundColor="#fff"
          display={props.isDesktop ? "flex" : "block"}
          justifyContent={props.isDesktop ? "center" : ""}
        >
          <div className="image">
            <img src={props.ourVision[0].acf.image} alt="alt" />
          </div>
          <div className="divBox">
            <Heading
              heroText={props.ourVision[0].title.rendered}
              width={props.isDesktop ? "50%" : ""}
              left="0"
              position="relative"
              textAlign="left"
              marginLeft="24px"
              color="#1c1c1c"
              fontSize="24px"
              marginTop={props.isDesktop ? "0" : "1em"}
            />
            <BodyText
              bodyText={props.ourVision[0].content.rendered}
              lineHeight="180%"
              width={props.isDesktop ? "90%" : ""}
							textAlign="left"
							marginLeft="24px"
              fontSize="20px"
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
            paddingBottom="1em"
            heroText="MISSION"
            left="0"
            position="relative"
            textAlign="left"
            color="#1c1c1c"
            fontSize="32px"
            marginLeft="14.8vw"
            width="auto"
          />
          <div className="membersBox">
            {props.missionData.map((item, index) => (
              <div className="members">
                <img src={`${item.acf.image}`} />
                <p key={index}>{`${item.content.rendered}`}</p>
              </div>
            ))}
          </div>
        </Section>
      </AboutStyle>
    );
	} else {
		return null
	}
}

export default AboutPage
