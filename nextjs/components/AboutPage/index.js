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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .image img{
            margin-top: 1.6em;
            width: 100%;
            /* display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; */
      }

      & .members{
        margin-top: 1em;
        grid-template-columns: 1fr 3fr;
        display: grid;
        align-items: center;
        margin-left: 24px;
        margin-right: 24px;
        width: 90%;

        & img{
          grid-column: 1;
        }

        p{
          margin-right: 24px;
          line-height: 28px;
          color: #1c1c1c;
        }
      }
`

const AboutPage = props => {
	if (props.whatWeDo || props.background || props.ourVision) {
		// console.log(props.pageData)
		console.log(props.navigationMenu)

		return (
			<AboutStyle>
				<Layout navigationMenu={props.pages}>
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
							textAlign="left"
							fontSize="18"
							width="100%"
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
						<div className="image">
							<img src={props.background[0].acf.image} />
						</div>
						<Heading
							heroText={props.background[0].title.rendered}
							left="0"
							position="relative"
							textAlign="left"
							marginLeft="24px"
							width="90%"
							color="#1c1c1c"
							fontSize="24px"
						/>
						<BodyText
							bodyText={props.background[0].content.rendered}
							lineHeight="180%"
							marginLeft="24px"
							textAlign="left"
							fontSize="18"
							width="90%"
							paddingBottom="5em"
						/>
					</Section>
					<Section backgroundColor="#fff">
						<div className="image">
							<img src={props.ourVision[0].acf.image} />
						</div>
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
							paddingBottom="5em"
						/>
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
				</Layout>
			</AboutStyle>
		)
	} else {
		return null
	}
}

export default AboutPage
