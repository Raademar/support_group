import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const MemberStyle = styled.div`
	margin: 0 auto;
	height: 100vh;
	background-color: ${props => props.backGroundColor || '#FFDD7E'};
	width: ${props => (props.isDesktop ? '50vw' : '100vw')};
	position: relative;

	svg {
		position: absolute;
		z-index: 1;
		margin-top: -109px;
		left: 0;
		bottom: 0;
		display: ${props => (props.isDesktop ? 'none' : '')};
	}
`

const Member = props => {
	if (props.pageData) {
		// console.log(props.memberData)

		const { sizes } = props.memberData[0].acf.landing_page_image
		return (
      <MemberStyle {...props}>
        <Section
          backgroundColor="#FFDD7E"
          marginLeft={props.isDesktop ? "16%" : ""}
          paddingTop="24px"
        >
          <Heading
            textAlign="left"
            position="relative"
            heroText="BECOME A MEMBER"
            width={props.isDesktop ? "60%" : "70%"}
            paddingTop={props.isDesktop ? "16%" : "46px"}
            color="black"
            marginTop="0"
            fontSize={props.isDesktop ? "36px" : ""}
            // heroText={props.pageData.title.rendered}
          />
          <BodyText
            position="relative"
            bodyText={props.pageData.content.rendered}
            textAlign="left"
            width={props.isDesktop ? "80%" : "96%"}
            lineHeight={props.isDesktop ? "180%" : "140%"}
            zIndex="3"
          />
          <Link href="/member">
            <Button
              color="#fff"
              fontSize="14px"
              width="198px"
              height="52px"
              text="BECOME A MEMBER"
              marginTop="19%"
              marginBottom="80px"
              zIndex="2"
              primary
            />
          </Link>
          <Image
            position="absolute"
            image={sizes.medium}
            bottom="0"
            right="0"
            width="80%"
          />
          <BodyText
            position="absolute"
            bodyText="“As a member i get a democratic possibility to vote. That together with all fun activities makes my membership a great thing.”
                        Kajsa Nilsson"
            textAlign="left"
            fontSize={props.isDesktop ? "20px" : "14px"}
            width="163px"
            zIndex="3"
            marginBottom="7.3em"
            // left="16%"
            lineHeight="25px"
            bottom="0"
            letterSpacing="0.04em"
          />
					<svg width="376" height="386" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 386h376V72.354C163.557 119.013 86.924 77.59 6.676 5.872A163.658 163.658 0 0 0 0 .217V386z" fill="#fff" /></svg>
        </Section>
      </MemberStyle>
    );
	} else {
		return null
	}
}

export default Member
